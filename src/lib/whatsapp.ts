export const WHATSAPP_ORDER_PHONE = "917299505240" as const;

const DEFAULT_ORDER_MESSAGE =
  "Hi Lilac & Honey, I would like to place an order. Could you please share the available options?";

export function getOrderWhatsAppLink(message = DEFAULT_ORDER_MESSAGE) {
  return `https://wa.me/${WHATSAPP_ORDER_PHONE}?text=${encodeURIComponent(message)}`;
}
