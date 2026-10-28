import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center bg-beige pt-24">
      <Container>
        <p className="eyebrow mb-6">404</p>
        <h1 className="headline text-[clamp(3rem,8vw,7rem)]">
          This plate
          <br />
          is empty.
        </h1>
        <p className="mt-6 max-w-md text-lg">The page you&apos;re looking for isn&apos;t on the menu.</p>
        <div className="mt-10">
          <ButtonLink href="/">Back to FILFIL</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
