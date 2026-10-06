export const WHATSAPP_PRIMARY = "905302143466";
export const WHATSAPP_DISPLAY = "+90 530 214 34 66";

export function whatsappLink(message: string, phone: string = WHATSAPP_PRIMARY) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Merhaba, myviptransfer hakkında bilgi almak istiyorum.";
