export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl mb-2">Maria Emilia Burton Trust</h3>
          <p className="text-muted-foreground max-w-prose">
            Empowering women and children through education, healthcare and
            livelihoods.
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maria Emilia Burton Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
