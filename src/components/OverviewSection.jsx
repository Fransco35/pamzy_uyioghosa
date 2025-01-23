import ImageOne from "../assets/image1.jpeg";

function OverviewSection() {
  return (
    <section id="overview" className="py-10 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Overview</h2>
      <figure className="mb-4 inline-block max-w-sm">
        <img
          src={ImageOne}
          alt="Ringworm example 1"
          className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
        />
        <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
          Ringworm is a circular shaped skin rash caused by fungal infection
        </figcaption>
      </figure>

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
      <br />
      <p className="mb-4">
        Emerging forms of ringworm frequently result in more severe illnesses
        than typical ringworm. Severe ringworm develops a big red (brown or gray
        on darker skin), scaly, itchy rash that spreads across the body. It may
        also produce pus-filled lumps and hair loss in the scalp or beard area.
      </p>
      <br />
      <h3 className="text-xl font-semibold mb-2">What to look out for ?</h3>
      <p className="mb-6">
        A rash that is scaly, dry, irritated, or inflamed may appear. Ringworm
        is however most common in the scalp (tinea capitis) and groin (jock
        itch). An irregular red, scaly area on white skin or an irregular brown
        or gray area on dark skin are the hallmarks of ringworm. You may also
        get itchy bumps. As time passes, the bump changes into a circular or
        ring-shaped patch. It may form different rings or patches as it spreads.
        Typically, the patch&apos;s interior has a white or scaly hue. The
        facade may be slightly elevated and uneven. The lumps may develop into
        pimples.
      </p>
      <br />
      <h3 className="text-xl font-semibold mb-2">Who is at Risk?</h3>
      <p className="mb-6">
        It is estimated that 20% to 25% of people will experience ringworm at
        some point in their lives. Even though children are most likely to
        experience this, anyone of any age might be infected. It is also
        particularly common among children who have not reached puberty, (tinea
        capitis), especially those of African and Caribbean descent. Also, if
        you have a weakened immune system or an autoimmune disease, sweat
        excessively. Coming in contact with an animal that has a ringworm.
      </p>
    </section>
  );
}

export default OverviewSection;
