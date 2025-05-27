import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class SanitizeDocumentPipe implements PipeTransform {
  transform(value: string) {
    const cleaned = value.replace(/\D/g, '');
    return cleaned;
  }
}
