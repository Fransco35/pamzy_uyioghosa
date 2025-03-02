function HeroSection() {
  return (
    <section className="h-screen bg-lab-background bg-no-repeat bg-center bg-cover">
      <div className="w-full h-screen px-6 md:px-12 flex flex-col justify-center items-start  bg-blackOverlay">
        <h1 className="text-4xl text-zinc-50 md:text-5xl font-bold mb-2 underline">
          Ringworm
        </h1>
        <h2 className="text-2xl text-zinc-50 font-semibold mb-2">(Tinea)</h2>
        <h2 className="text-2xl text-zinc-50 font-semibold mb-6">
          Dermatophytosis
        </h2>
        <p className="mb-4 text-zinc-50 max-w-prose">
          Ringworm is a common fungal infection. Ringworm is an unpleasant,
          infectious fungal condition that leaves a ring-shaped mark on your
          skin. They are not caused by worms but by a fungal infection. To treat
          it, you can typically purchase Over-the-counter medication from a
          drugstore.
        </p>
        <p className="mb-6 text-zinc-50 max-w-prose">
          This can help to treat it and prevent the spread from one part of the
          body to another and from person to person.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
