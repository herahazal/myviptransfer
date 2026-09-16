export const WHATSAPP_PRIMARY = "905426275847";
export const WHATSAPP_SECONDARY = "905436275847";

export function whatsappLink(message: string, phone: string = WHATSAPP_PRIMARY) {
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Merhaba, myviptransfer hakkında bilgi almak istiyorum.";
