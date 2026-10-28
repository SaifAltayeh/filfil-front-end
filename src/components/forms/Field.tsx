import { cn } from "@/lib/cn";

export function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="eyebrow flex items-center justify-between">
        <span>{label}</span>
        {optional ? <span className="tracking-normal text-black/45">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-sm">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full border-0 border-b border-black/30 bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-black/35 focus:border-black";

export function TextInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(inputClass, className)} {...props} />;
}

export function TextArea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(inputClass, "min-h-32 resize-y", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(inputClass, "rounded-none", className)} {...props}>
      {children}
    </select>
  );
}

export function FormStatus({
  error,
  success,
}: {
  error?: string | null;
  success?: boolean;
}) {
  if (success) {
    return (
      <p role="status" className="text-lg">
        Thank you. We&apos;ve received your message and will be in touch.
      </p>
    );
  }
  if (error) {
    return (
      <p role="alert" className="text-lg">
        {error}
      </p>
    );
  }
  return null;
}
