
export function sanitizeDocument(document: string) {
    return document.replace(/\D/g, '');
}