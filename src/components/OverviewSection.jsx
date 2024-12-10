function OverviewSection() {
  return (
    <section id="overview" className="py-10 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>
      <ul className="list-disc ml-6 mb-4">
        <li className="font-semibold">Ringworm basics</li>
        <li className="font-semibold">Types of ringworm:</li>
      </ul>
      <p className="mb-4">
        Ringworm has several names depending on where it develops on your body,
        and it can appear almost anywhere. Ringworm diseases include:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Ringworm (tinea corporis)</strong> affects the entire body.
        </li>
        <li>
          <strong>Fungal nail infections (onychomycosis)</strong> affect nails,
          causing them to become bulky and discolored.
        </li>
        <li>
          <strong>Athlete&apos;s foot (tinea pedis)</strong> affects the feet.
        </li>
        <li>
          <strong>Jock itch (tinea cruris)</strong> affects the groin, upper
          thigh, or rectum.
        </li>
        <li>
          <strong>Tinea capitis</strong> affects the scalp, causing scaly, red,
          itchy, and bald patches.
        </li>
        <li>
          <strong>Tinea barbae</strong> affects facial hair (beard).
        </li>
      </ul>
      {/* Add any additional elements or images */}
    </section>
  );
}

export default OverviewSection;
