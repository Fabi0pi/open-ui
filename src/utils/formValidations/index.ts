export function validateEmail(email: string): boolean {
  // Espressione regolare per validare un'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
