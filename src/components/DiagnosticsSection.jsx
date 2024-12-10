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
            <strong>Trichoscopy:</strong> A non-invasive technique using a
            microscope for hair and scalp diseases.
          </li>
          <li>
            <strong>Conventional PCR:</strong> A method for amplifying fungal
            DNA to identify the specific fungus type.
          </li>
          <li>
            <strong>CRISPR/Cas12 lateral flow test:</strong> A quick, novel
            method to identify fungal infections.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default DiagnosticsSection;
