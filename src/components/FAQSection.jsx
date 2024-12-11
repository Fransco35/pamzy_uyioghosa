function FAQSection() {
  return (
    <section id="faq" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              HOW CONTAGIOUS IS RINGWORM?
            </h3>
            <p className="mt-2 text-gray-600">Ringworm is very contagious.</p>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              HOW DOES RINGWORM AFFECT PREGNANCY?
            </h3>
            <p className="mt-2 text-gray-600">
              Ringworm won’t have an effect on your pregnancy, but still, always
              check with your GP before using any medication.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              CAN I GET RINGWORM FROM MY PET?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes you can. Always wash your hands after petting your pets or the
              pets of others.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              IS RINGWORM CAUSED BY A WORM?
            </h3>
            <p className="mt-2 text-gray-600">No, it is caused by a fungus.</p>
          </div>

          {/* Question 5 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              HOW IS RINGWORM SPREAD?
            </h3>
            <p className="mt-2 text-gray-600">
              By direct contact with an infected person, animal or object.{" "}
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              HOW IS RINGWORM DIFFERENT FROM ECZEMA?
            </h3>
            <p className="mt-2 text-gray-600">
              Unlike ringworm, Eczema is not contagious. But both symptoms are
              similar with red skin and itching. Ringworm also forms a ring-like
              shape on your skin. Always contact your GP for a proper and
              diagnosis.
            </p>
          </div>
        </div>
        <br />
        <h3 className="text-xl font-semibold mb-2">NB.</h3>
        <p className="mb-6">
          Always ask your GP about how to prevent ringworm from returning or
          even spreading to other parts of body and others. Treatment isn’t
          always immediate but it is necessary to follow the outlined treatment
          recommendations to healed.
        </p>
      </div>
    </section>
  );
}

export default FAQSection;
