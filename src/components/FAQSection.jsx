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
              How contagious is ringworm?
            </h3>
            <p className="mt-2 text-gray-600">
              Ringworm is very contagious. It can spread through direct contact
              with an infected person, animal, or object.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              How does ringworm affect pregnancy?
            </h3>
            <p className="mt-2 text-gray-600">
              Ringworm won’t have an effect on your pregnancy, but always check
              with your GP before using any medication.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              Can I get ringworm from my pet?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, you can. Always wash your hands after petting your pets or
              the pets of others.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800">
              How is ringworm different from eczema?
            </h3>
            <p className="mt-2 text-gray-600">
              Unlike ringworm, eczema is not contagious. Both have similar
              symptoms like red, itchy skin, but ringworm forms a ring-like
              shape. Consult your GP for a proper diagnosis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
