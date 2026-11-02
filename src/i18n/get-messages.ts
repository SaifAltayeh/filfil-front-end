import { dictionaries, type Messages } from "./messages";
import { getLocale } from "./get-locale";

export async function getMessages(): Promise<Messages> {
  const locale = await getLocale();
  return dictionaries[locale];
}
