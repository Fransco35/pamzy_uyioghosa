// DiagnosticsSection.jsx

function DiagnosticsSection() {
  return (
    <section id="diagnostics" className="py-16 bg-gray-100 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Latest Diagnostics</h2>
        <h3 className="text-xl font-semibold mb-2">How is it diagnosed?</h3>
        <p className="mb-6">
          Diagnosis often involves a GP examining the skin and evaluating
          symptoms. Other advanced techniques include:
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Trichoscopy:</strong> Let&apos;s break it down; This is a
            non-invasive technique that uses a microscope to magnify hair
            strands, enabling a healthcare provider to analyze hair and scalp
            diseases. Current research suggests that trichoscopy can be used as
            a quick diagnostic method for tinea capitis, avoiding the need for
            the time-consuming traditional method of fungal culture.
          </li>
          <li>
            <strong>
              Molecular Diagnostics techniques like conventional PCR:
            </strong>{" "}
            Conventional PCR is like a photocopying machine for tiny bits of
            DNA. It makes millions of copies of a specific DNA part so
            scientists can study it easily. In the case of ringworm, PCR helps
            doctors figure out if fungi are causing the problem and even
            identify the exact type of fungus.
          </li>
          <li>
            <strong>Modified rapid culture diseases</strong>
          </li>
          <li>
            <strong>The CRISPR/Cas12 lateral flow test:</strong>{" "}
            (CRISPR/Cas12-LFA) is a novel, easy, and quick method that enables
            the identification of fungi that cause skin illnesses like ringworm
            or athlete&apos;s foot. Think of this like something similar to a
            pregnancy test that is intended to identify fungal infections.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DiagnosticsSection;
