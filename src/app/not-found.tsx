import { Brand } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getMessages } from "@/i18n/get-messages";

export default async function NotFound() {
  const t = await getMessages();

  return (
    <main className="flex min-h-svh items-center bg-beige pt-24">
      <Container>
        <p className="eyebrow mb-6">404</p>
        <h1 className="headline text-[clamp(3rem,8vw,7rem)]">
          {t.notFound.title.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-md text-lg">{t.notFound.body}</p>
        <div className="mt-10">
          <ButtonLink href="/">
            {t.notFound.back} <Brand />
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
