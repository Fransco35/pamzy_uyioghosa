// CausesSection.jsx

function CausesSection() {
  return (
    <section id="causes" className="py-16 bg-white px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-4">Causes</h2>

        {/* Symptoms */}
        <h3 className="text-xl font-semibold mb-2">Symptoms</h3>
        <p className="mb-6">
          The main symptom of ringworm is a rash. Depending on your skin tone,
          it could appear rosy or dark. A rash that is scaly, dry, irritated, or
          inflamed may appear. Symptoms may appear between 4 and 14 days after
          direct contact with an infected person, animal, or object. Ringworm
          can be found in any part of the body, however it is most common in the
          scalp (especially in children) and groin.
        </p>

        {/* Causes */}
        <h3 className="text-xl font-semibold mb-2">Causes</h3>
        <p className="mb-6">
          Fungal gets spread between people through direct skin contact as well
          as through sharing items like towels, shampoos, and clothing.
          Athletes&apos; feet typically spread out in gym and pool changing
          areas. Our favourite animals, such as dogs and cats, can exhibit
          ringworm and you can be infected by caressing them. Point to note.
          This fungus lives on your skin, hair and even nails. Although, when
          their surroundings get hot and humid, the fungus starts to grow.
        </p>

        {/* Embedded YouTube Video */}
        <div className="aspect-w-16 aspect-h-15">
          <iframe
            src="https://youtube.com/k_bNsxMcuog?si=iLlHi70F1D_P_gPc"
            title="Ringworm Causes"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default CausesSection;
