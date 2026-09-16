export const WHATSAPP_PRIMARY = "905327281991";
export const WHATSAPP_DISPLAY = "+90 532 728 19 91";

export function whatsappLink(message: string, phone: string = WHATSAPP_PRIMARY) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Merhaba, myviptransfer hakkında bilgi almak istiyorum.";
