import Button from "@/components/ui/buttons/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-24">
      <h3 className="mb-8 text-global">
        THE BEGINING OF NEW WORLD!
      </h3>
      <Button variant="contained" width="200px"  border-radius="square">Click Me!</Button>
        
    </main>
  );
}
