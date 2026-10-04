const sharedCredits = [
  ['Creative direction', 'Raul Sebastiao'],
  ['Design', 'Raul Sebastiao']
];

const projects = {
  vendahead: {
    title: 'VendAhead',
    category: 'Brand identity · Digital · 2026',
    descriptor: 'Brand Identity & Digital Experience',
    lead: 'A delivery-marketplace identity designed to feel fast, useful and instantly recognisable across physical and digital touchpoints.',
    overview: 'VendAhead is a delivery marketplace created to give independent food businesses a stronger way to reach customers. The project involved building a complete identity system and digital direction that could connect vendors, riders and customers through one clear, energetic brand.',
    tools: 'Adobe Illustrator, Photoshop, Figma',
    deliverables: ['Brand positioning', 'Logo and icon system', 'Typography and colour', 'Packaging applications', 'Digital product direction', 'Campaign mockups'],
    timeline: '2026 — Independent concept',
    art: "url('./assets/vendahead-rider.png') center / cover no-repeat",
    narrative: [
      {
        label: 'The brief / challenge',
        title: 'A challenger brand built for the whole delivery journey.',
        body: 'The brand needed enough personality to stand beside established delivery platforms while remaining approachable for independent vendors, riders and customers. It also had to stay recognisable everywhere — from an app icon and ordering interface to a delivery bag moving through the street.'
      },
      {
        label: 'Concept / approach',
        title: 'Clarity, movement and appetite.',
        body: 'The direction combines a compact visual identity with a warm, high-impact palette and direct typography. Every decision was made to feel immediate and useful, while the wider system brings energy through scale, cropping and graphic rhythm rather than decoration.'
      },
      {
        label: 'Development / process',
        title: 'From symbol studies to a flexible wordmark system.',
        body: 'Early exploration tested how the V and A could create a simple directional form. The strongest route became a mark that could hold its shape at small sizes, then expand into a family of wordmarks, lock-ups and campaign compositions.',
        images: [
          { src: './assets/vendahead-logo-explorations.png', alt: 'VendAhead logo mark exploration board' },
          { src: './assets/vendahead-wordmark.png', alt: 'VendAhead wordmark and lock-up system' }
        ]
      }
    ],
    solution: {
      title: 'One identity, built for every touchpoint.',
      text: 'The final system uses a recognisable core mark, generous typography and an appetite-led palette to connect physical and digital moments. It can be reduced to an app icon or expanded confidently across packaging, delivery bags, signage, stationery and vehicle graphics.',
      art: "url('./assets/vendahead-food.png') center / cover no-repeat",
      alt: 'VendAhead branded healthy food packaging'
    },
    features: [
      {
        title: 'A digital experience with the same directness.',
        text: 'The interface carries the visual system into ordering without letting the brand get in the way. Clear hierarchy, strong product imagery and decisive calls to action make the journey feel quick while retaining VendAhead’s character.',
        image: './assets/vendahead-ui.png',
        alt: 'VendAhead mobile ordering interface across three phones'
      },
      {
        title: 'Typography that can lead or disappear.',
        text: 'A practical type system creates a consistent voice across functional product moments and larger campaign statements. Weight and scale provide the expression, leaving the surrounding layout clean and adaptable.',
        image: './assets/vendahead-typography.png',
        alt: 'VendAhead typography system using Manrope and Inter'
      }
    ],
    galleryIntro: 'The wider identity was designed as a toolkit rather than a collection of fixed layouts, giving every application enough freedom to suit its purpose while remaining unmistakably VendAhead.',
    gallery: [
      { src: './assets/vendahead-palette.png', alt: 'VendAhead brand colour palette', caption: '01 / Colour palette', size: 'wide' },
      { src: './assets/vendahead-business-cards.png', alt: 'VendAhead business cards and stationery', caption: '02 / Stationery', size: 'wide' },
      { src: './assets/vendahead-wordmark.png', alt: 'VendAhead wordmark and lock-up system', caption: '03 / Wordmark system', size: 'full' },
      { src: './assets/vendahead-food.png', alt: 'VendAhead branded healthy food packaging', caption: '04 / Packaging system', size: 'standard' }
    ],
    outcome: {
      title: 'A coherent foundation for brand and product.',
      text: 'The project establishes one flexible system for the customer interface, vendor communications and the physical delivery experience. That shared foundation means new touchpoints can be created without rebuilding the identity each time.'
    },
    credits: sharedCredits
  },
  'empower-physiotherapy': {
    title: 'Empower Physiotherapy',
    category: 'Brand identity · Social content · 2026',
    descriptor: 'Logo Design & Brand Identity',
    lead: 'A brand identity for a UK physiotherapy start-up, built around the transition from stiffness to relaxed movement.',
    overview: 'Empower Physiotherapy is a UK client start-up that needed a brand built from scratch. The project focused on logo design, brand identity and social media content, creating a recognisable foundation for the business.',
    tools: 'Adobe Illustrator',
    deliverables: ['Logo design', 'Brand identity', 'Social media content'],
    timeline: '2026 — Under one month',
    art: '#f1f0eb',
    textPreview: true,
    narrative: [
      { label: 'The brief / challenge', title: 'Give a new practice a clear identity.', body: 'The brief was to create a brand from scratch for Empower Physiotherapy. The identity needed to communicate the purpose of the practice and work across both small social applications and larger marketing materials.' },
      { label: 'Concept / approach', title: 'From stiffness to relaxed movement.', body: 'The concept centres on the transition from stiffness to a more relaxed form. Shapes within the E resemble vertebrae, connecting the mark to physiotherapy. Green brings associations of health, renewal and energy.' },
      { label: 'Development / process', title: 'Explore widely, refine together.', body: 'More than 20 directions were explored collaboratively before refining the chosen identity in Adobe Illustrator. The development focused on the E and how it could work both independently and alongside the name.' }
    ],
    solution: {
      title: 'Three logo versions, one recognisable identity.',
      text: 'The final logo set includes a standalone E icon for social profiles and smaller applications; a text logo for the website, marketing materials and emails; and a combined mark for large-format print and event exhibitions. Green, black and white colourways provide flexibility, with green more prominent in social media content. The identity stays focused on the E, without additional patterns or graphic shapes.'
    },
    credits: sharedCredits
  },
  syncd: {
    title: 'SYNCD', category: 'Product · UX/UI · Strategy · 2026', descriptor: 'Product Strategy & UX/UI',
    lead: 'A social fitness product that lets people train together from anywhere through synchronised sessions, shared effort and accountability.',
    overview: 'SYNCD translates the motivation of exercising together into a digital product for people who cannot be in the same place. The experience centres on shared start times, live sessions and the accountability of training as a group.',
    tools: 'Figma, FigJam, Adobe Illustrator',
    deliverables: ['Product strategy', 'Feature architecture', 'User journeys', 'Interface design', 'Prototype direction', 'Product roadmap'],
    timeline: '2026 — Product concept',
    art: 'radial-gradient(circle at 50% 50%, #d8ff45 0 7%, transparent 7.5%), repeating-radial-gradient(circle at 50% 50%, #121212 0 24px, #94b52f 25px 27px, #121212 28px 52px)',
    narrative: [
      { label: 'The brief / challenge', title: 'Recreate the feeling of starting together.', body: 'Remote fitness products often measure individual performance but fail to recreate the shared start, common pace and accountability of a real group session.' },
      { label: 'Concept / approach', title: 'Every feature supports one shared moment.', body: 'A host creates a session, invites their people and everyone begins together. Presets, live intervals, history, privacy controls and invitations sit around that simple core behaviour.' }
    ],
    solution: { title: 'Together starts with the same countdown.', text: 'The product combines synchronised workouts with lightweight social tools, giving groups a shared structure without turning training into another feed. The same system can extend from cycling into running, HIIT, hiking and more.', art: 'radial-gradient(circle at 50% 50%, #d8ff45 0 7%, transparent 7.5%), repeating-radial-gradient(circle at 50% 50%, #121212 0 24px, #94b52f 25px 27px, #121212 28px 52px)', alt: 'Abstract synchronised training graphic' },
    credits: sharedCredits
  },
  'urban-essentials': {
    title: 'Urban Essentials', category: 'Art direction · E-commerce · 2026', descriptor: 'Campaign Art Direction & E-commerce',
    lead: 'An atmospheric e-commerce direction that places products inside a dense, cinematic world rather than a conventional catalogue.',
    overview: 'Urban Essentials needed a campaign environment capable of presenting retail products without losing the brand’s darker visual character. The resulting direction creates a modular, cinematic world built for e-commerce banners and campaign variants.',
    tools: 'Adobe Photoshop, Illustrator',
    deliverables: ['Campaign concept', 'Visual art direction', 'Hero-banner imagery', 'Product-placement system', 'Foreground asset library'],
    timeline: '2026 — Campaign concept',
    art: 'radial-gradient(circle at 28% 72%, #8f58ff 0 12%, transparent 31%), radial-gradient(circle at 75% 30%, #245a39 0 15%, transparent 42%), linear-gradient(135deg, #08150e, #1a3726 55%, #090b0a)',
    narrative: [
      { label: 'The brief / challenge', title: 'Build atmosphere without obscuring the product.', body: 'The imagery needed to support product placement and conversion while avoiding the detached feel of a conventional cut-out product grid.' },
      { label: 'Concept / approach', title: 'A storefront hidden inside the environment.', body: 'Layered foliage, low mist and controlled pools of light create a realistic jungle world. Rocks, branches and clear visual pockets become natural stages for each product.' }
    ],
    solution: { title: 'One world, designed in modular layers.', text: 'Lighting, foreground foliage, mist and product positions can shift across banners and campaign variants without losing the central atmosphere. The system balances cinematic depth with practical space for products and messaging.', art: 'radial-gradient(circle at 28% 72%, #8f58ff 0 12%, transparent 31%), radial-gradient(circle at 75% 30%, #245a39 0 15%, transparent 42%), linear-gradient(135deg, #08150e, #1a3726 55%, #090b0a)', alt: 'Abstract jungle campaign atmosphere' },
    credits: sharedCredits
  },
  'country-hype': {
    title: 'Country Hype', category: 'Identity · Events · Motion · 2026', descriptor: 'Event Identity & Motion',
    lead: 'A high-energy identity direction for a premium urban music event, balancing nightlife intensity with a recognisable CH monogram.',
    overview: 'Country Hype is an over-21s event playing bashment, reggae, R&B and hip-hop. The identity needed enough energy for promotion, enough polish for a premium audience and a simple form that could move naturally on screen.',
    tools: 'Adobe Illustrator, Photoshop, After Effects',
    deliverables: ['Creative direction', 'Monogram exploration', 'Identity system', 'Social applications', 'Event graphics', 'Motion concept'],
    timeline: '2026 — Identity concept',
    art: 'conic-gradient(from 210deg at 50% 50%, #ff3b7b, #faad31, #4225ff, #111, #ff3b7b)',
    narrative: [
      { label: 'The brief / challenge', title: 'Recognition without relying on the name.', body: 'The mark needed to communicate the event without a wordmark, remain clear at social-media scale and translate naturally into motion.' },
      { label: 'Development / process', title: 'Reducing two letters into one attitude.', body: 'Exploration treated the C and H as a single icon, moving from broad initial studies towards a tighter monogram with the energy of urban nightlife branding.' }
    ],
    solution: { title: 'A monogram designed to move.', text: 'The final direction works as both a static stamp and a looping event visual. Scale, light and rhythmic motion give the mark energy across screens, backdrops and promotional content.', art: 'conic-gradient(from 210deg at 50% 50%, #ff3b7b, #faad31, #4225ff, #111, #ff3b7b)', alt: 'Abstract Country Hype event identity graphic' },
    credits: sharedCredits
  }
};

const projectKeys = Object.keys(projects);
const cursor = document.querySelector('.cursor');
const preview = document.querySelector('.project-preview');
const previewArt = preview.querySelector('.preview-art');
const dialog = document.querySelector('.project-dialog');
const menu = document.querySelector('#site-nav');
const menuToggle = document.querySelector('.menu-toggle');

window.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
  preview.style.left = `${event.clientX + 170}px`;
  preview.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a, button').forEach((item) => {
  item.addEventListener('mouseenter', () => cursor.classList.add('active'));
  item.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

document.querySelectorAll('.project-row').forEach((row) => {
  row.addEventListener('mouseenter', () => {
    const project = projects[row.dataset.project];
    previewArt.style.background = project.art;
    previewArt.textContent = project.textPreview ? project.title : '';
    previewArt.classList.toggle('preview-art--title', !!project.textPreview);
    preview.classList.add('visible');
  });
  row.addEventListener('mouseleave', () => preview.classList.remove('visible'));
  row.addEventListener('click', () => openProject(row.dataset.project));
});

function makeNarrativeBlock(block, index) {
  const section = document.createElement('section');
  section.className = `case-story case-section${block.images?.length ? ' case-story--visual' : ''}`;
  const copy = document.createElement('div');
  copy.className = 'case-story-copy';
  const label = document.createElement('p');
  label.className = 'case-label';
  label.textContent = block.label;
  const title = document.createElement('h3');
  title.textContent = block.title;
  const body = document.createElement('p');
  body.textContent = block.body;
  copy.append(label, title, body);
  section.append(copy);

  if (block.images?.length) {
    const media = document.createElement('div');
    media.className = 'case-process-grid';
    block.images.forEach((item, imageIndex) => {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      image.src = item.src;
      image.alt = item.alt;
      image.loading = 'lazy';
      const caption = document.createElement('figcaption');
      caption.textContent = `${String(index + 1).padStart(2, '0')}.${imageIndex + 1} / Process`;
      figure.append(image, caption);
      media.append(figure);
    });
    section.append(media);
  }
  return section;
}

function makeFeature(feature, index) {
  const section = document.createElement('section');
  section.className = `case-detail case-section${index % 2 ? ' case-detail--reverse' : ''}`;
  const copy = document.createElement('div');
  const label = document.createElement('p');
  label.className = 'case-label';
  label.textContent = `Feature / detail ${String(index + 1).padStart(2, '0')}`;
  const title = document.createElement('h3');
  title.textContent = feature.title;
  const body = document.createElement('p');
  body.textContent = feature.text;
  copy.append(label, title, body);
  const figure = document.createElement('figure');
  const image = document.createElement('img');
  image.src = feature.image;
  image.alt = feature.alt;
  image.loading = 'lazy';
  figure.append(image);
  section.append(copy, figure);
  return section;
}

function openProject(key) {
  const project = projects[key];
  const nextKey = projectKeys[(projectKeys.indexOf(key) + 1) % projectKeys.length];
  dialog.querySelector('#dialog-title').textContent = project.title;
  dialog.querySelector('.case-category').textContent = project.descriptor;
  dialog.querySelector('.dialog-lead').textContent = project.lead;
  dialog.querySelector('.case-overview-text').textContent = project.overview;
  dialog.querySelector('.case-tools').textContent = project.tools;
  dialog.querySelector('.case-deliverables-text').textContent = project.deliverables.join(', ');
  dialog.querySelector('.case-timeline').textContent = project.timeline;
  dialog.querySelector('.dialog-art').style.background = project.art;
  dialog.querySelector('.dialog-visual').hidden = !!project.textPreview;
  dialog.querySelector('.case-solution').classList.toggle('case-solution--text', !!project.textPreview);
  dialog.querySelector('.case-narrative').replaceChildren(...(project.narrative || []).map(makeNarrativeBlock));

  const solution = project.solution;
  const solutionArt = dialog.querySelector('.case-feature-art');
  solutionArt.style.background = solution.art || project.art;
  solutionArt.hidden = !!project.textPreview;
  solutionArt.setAttribute('aria-label', solution.alt || `${project.title} project image`);
  dialog.querySelector('.case-solution-title').textContent = solution.title;
  dialog.querySelector('.case-solution-text').textContent = solution.text;
  dialog.querySelector('.case-features').replaceChildren(...(project.features || []).map(makeFeature));

  const gallery = dialog.querySelector('.case-gallery');
  const galleryItems = project.gallery || [];
  gallery.hidden = galleryItems.length === 0;
  dialog.querySelector('.case-gallery-intro').textContent = project.galleryIntro || '';
  dialog.querySelector('.case-gallery-grid').replaceChildren(...galleryItems.map((item) => {
    const figure = document.createElement('figure');
    figure.className = `case-gallery-item case-gallery-item--${item.size || 'standard'}`;
    const image = document.createElement('img');
    image.src = item.src;
    image.alt = item.alt;
    image.loading = 'lazy';
    const caption = document.createElement('figcaption');
    caption.textContent = item.caption;
    figure.append(image, caption);
    return figure;
  }));

  const outcome = dialog.querySelector('.case-outcome');
  outcome.hidden = !project.outcome;
  outcome.replaceChildren();
  if (project.outcome) {
    const label = document.createElement('p');
    label.className = 'case-label';
    label.textContent = 'Outcome / results';
    const copy = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = project.outcome.title;
    const body = document.createElement('p');
    body.textContent = project.outcome.text;
    copy.append(title, body);
    outcome.append(label, copy);
  }

  const credits = dialog.querySelector('.case-credits');
  const creditsLabel = document.createElement('p');
  creditsLabel.className = 'case-label';
  creditsLabel.textContent = 'Credits';
  const creditList = document.createElement('dl');
  (project.credits || sharedCredits).forEach(([role, name]) => {
    const item = document.createElement('div');
    const term = document.createElement('dt');
    term.textContent = role;
    const detail = document.createElement('dd');
    detail.textContent = name;
    item.append(term, detail);
    creditList.append(item);
  });
  credits.replaceChildren(creditsLabel, creditList);

  const nextButton = dialog.querySelector('.next-project');
  nextButton.dataset.project = nextKey;
  nextButton.querySelector('strong').textContent = projects[nextKey].title;
  preview.classList.remove('visible');
  document.body.classList.add('dialog-open');
  dialog.querySelector('.dialog-scroll').scrollTop = 0;
  if (!dialog.open) dialog.showModal();
}

function closeProject() {
  dialog.close();
  document.body.classList.remove('dialog-open');
}

dialog.querySelector('.dialog-close').addEventListener('click', closeProject);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeProject(); });
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.querySelector('.next-project').addEventListener('click', (event) => openProject(event.currentTarget.dataset.project));

menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = 'Menu';
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  document.querySelector('.scroll-progress span').style.width = `${progress}%`;
}, { passive: true });
