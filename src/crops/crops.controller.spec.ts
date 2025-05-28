import { Test, TestingModule } from '@nestjs/testing';
import { CropsController } from './crops.controller';
import { CropsService } from './crops.service';
import { ACropsRepository } from '../core/repositories/abstracts/acrops.repository';
import { ARuralPropertiesRepository } from '../core/repositories/abstracts/arural_properties.repository';
import { PrismaService } from '../core/database/prisma.service';
import { HttpStatus, INestApplication, NotFoundException, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { VALID_CROP } from 'test/mocks/crops';
import { VALID_RURAL_PROPERTY } from 'test/mocks/ruralProperties';
import { IsValidRuralPropertyIdConstraint } from 'src/core/validators/IsValidRuralPropertyId';
import { useContainer } from 'class-validator';

describe('CropsController', () => {
  let app: INestApplication;
  let server;
  let controller: CropsController;

  const MockedCropsRepository = {
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
    getArableAreaInUse: jest.fn(),
  };

  const MockedRuralPropertyRepository = {
    findOne: jest.fn(),
  };

  const MockedIsValidRuralPropertyId = {
    validate: jest.fn(),
    defaultMessage: jest.fn().mockReturnValue('mocked message'),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CropsService,
        PrismaService,
        {
          provide: ACropsRepository,
          useValue: MockedCropsRepository,
        },
        {
          provide: ARuralPropertiesRepository,
          useValue: MockedRuralPropertyRepository,
        },
        {
          provide: IsValidRuralPropertyIdConstraint,
          useValue: MockedIsValidRuralPropertyId,
        },
      ],
      controllers: [CropsController],
    }).compile();

    app = module.createNestApplication();
    useContainer(app, { fallbackOnErrors: true })
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );

    await app.init();
    server = await app.getHttpServer();
    controller = module.get<CropsController>(CropsController);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Verifica se o controller foi definido com sucesso!', () => {
    expect(controller).toBeDefined();
  });

  it(`GET /crops`, async () => {
    MockedCropsRepository.findAll.mockResolvedValue([]);
    const response = await request(server).get('/crops');
    expect(response.statusCode).toEqual(HttpStatus.OK);
  });

  it(`GET /crops:id - Com um parâmetro :id em formato incorreto`, async () => {
    const response = await request(server).get('/crops/asdfasdf');
    expect(response.statusCode).toEqual(HttpStatus.BAD_REQUEST);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`GET /crops:id - Com um parâmetro :id inexistente`, async () => {
    MockedCropsRepository.findOne.mockRejectedValue(new NotFoundException("Not Found"));
    const response = await request(server).get('/crops/16');
    expect(response.statusCode).toEqual(HttpStatus.NOT_FOUND);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`GET /crops:id - Com um parâmetro :id válido`, async () => {
    MockedCropsRepository.findOne.mockResolvedValue(VALID_CROP);
    const response = await request(server).get('/crops/16');
    expect(response.statusCode).toEqual(HttpStatus.OK);
    expect(response.body).toMatchObject(VALID_CROP);
  });

  it(`PATCH /crops:id - Com parâmetro :id em formato incorreto`, async () => {
    const response = await request(server).patch('/crops/sdfasfasdf').send(VALID_CROP);
    expect(response.statusCode).toEqual(HttpStatus.BAD_REQUEST);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`PATCH /crops:id - Com parâmetro :id inexistente`, async () => {
    MockedIsValidRuralPropertyId.validate.mockResolvedValue(true);
    MockedCropsRepository.findOne.mockRejectedValue(new NotFoundException("Not Found"));
    const response = await request(server).patch('/crops/16').send(VALID_CROP);
    expect(response.statusCode).toEqual(HttpStatus.NOT_FOUND);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`PATCH /crops:id - Com parâmetro :id válido, porém excedendo a área agricultável da propriedade`, async () => {
    MockedIsValidRuralPropertyId.validate.mockResolvedValue(true);
    MockedRuralPropertyRepository.findOne.mockResolvedValue(VALID_RURAL_PROPERTY);
    MockedCropsRepository.getArableAreaInUse.mockResolvedValue(0);
    MockedCropsRepository.findOne.mockResolvedValue(VALID_CROP);
    const invalidDto = { ...VALID_CROP, area: 999999 };
    const response = await request(server).patch('/crops/16').send(invalidDto);
    expect(response.statusCode).toEqual(HttpStatus.UNPROCESSABLE_ENTITY);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`PATCH /crops:id - Com parâmetro :id válido e área compatível com tamanho da propriedade`, async () => {
    MockedIsValidRuralPropertyId.validate.mockResolvedValue(true);
    MockedRuralPropertyRepository.findOne.mockResolvedValue(VALID_RURAL_PROPERTY);
    MockedCropsRepository.getArableAreaInUse.mockResolvedValue(0);
    MockedCropsRepository.findOne.mockResolvedValue(VALID_CROP);
    MockedCropsRepository.update.mockResolvedValue(VALID_CROP);

    const response = await request(server).patch('/crops/16').send(VALID_CROP);
    expect(response.statusCode).toEqual(HttpStatus.OK);
    expect(response.body).toMatchObject(VALID_CROP);
  });


  it(`PUT /crops:id - Com parâmetro :id em formato incorreto`, async () => {
    const response = await request(server).put('/crops/sdfasfasdf').send(VALID_CROP);
    expect(response.statusCode).toEqual(HttpStatus.BAD_REQUEST);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`PUT /crops:id - Com parâmetro :id inexistente`, async () => {
    MockedIsValidRuralPropertyId.validate.mockResolvedValue(true);
    MockedCropsRepository.findOne.mockRejectedValue(new NotFoundException("Not Found"));
    const response = await request(server).put('/crops/16').send(VALID_CROP);
    expect(response.statusCode).toEqual(HttpStatus.NOT_FOUND);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`PUT /crops:id - Com parâmetro :id válido, porém excedendo a área agricultável da propriedade`, async () => {
    MockedIsValidRuralPropertyId.validate.mockResolvedValue(true);
    MockedRuralPropertyRepository.findOne.mockResolvedValue(VALID_RURAL_PROPERTY);
    MockedCropsRepository.getArableAreaInUse.mockResolvedValue(0);
    MockedCropsRepository.findOne.mockResolvedValue(VALID_CROP);
    const invalidDto = { ...VALID_CROP, area: 999999 };
    const response = await request(server).put('/crops/16').send(invalidDto);
    expect(response.statusCode).toEqual(HttpStatus.UNPROCESSABLE_ENTITY);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`PUT /crops:id - Com parâmetro :id válido e área compatível com tamanho da propriedade`, async () => {
    MockedIsValidRuralPropertyId.validate.mockResolvedValue(true);
    MockedRuralPropertyRepository.findOne.mockResolvedValue(VALID_RURAL_PROPERTY);
    MockedCropsRepository.getArableAreaInUse.mockResolvedValue(0);
    MockedCropsRepository.findOne.mockResolvedValue(VALID_CROP);
    MockedCropsRepository.update.mockResolvedValue(VALID_CROP);

    const response = await request(server).put('/crops/16').send(VALID_CROP);
    expect(response.statusCode).toEqual(HttpStatus.OK);
    expect(response.body).toMatchObject(VALID_CROP);
  });

  it(`DELETE /crops:id - Com um parâmetro :id em formato incorreto`, async () => {
    const response = await request(server).delete('/crops/asdfasdf');
    expect(response.statusCode).toEqual(HttpStatus.BAD_REQUEST);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`DELETE /crops:id - Com um parâmetro :id inexistente`, async () => {
    MockedCropsRepository.findOne.mockRejectedValue(new NotFoundException("Not Found"));
    const response = await request(server).delete('/crops/16');
    expect(response.statusCode).toEqual(HttpStatus.NOT_FOUND);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("error");
  });

  it(`DELETE /crops:id - Com um parâmetro :id válido`, async () => {
    MockedCropsRepository.findOne.mockResolvedValue(VALID_CROP);
    MockedCropsRepository.delete.mockResolvedValue({
      success: "Cultura removida com sucesso!"
    });
    const response = await request(server).delete('/crops/16');
    expect(response.statusCode).toEqual(HttpStatus.OK);
    expect(response.body).toMatchObject({
      success: "Cultura removida com sucesso!"
    });
  });
});