import specsCsv from './squirrel_master_products.csv?raw'

const productImageModules = import.meta.glob('../assets/Products/*.png', {
  eager: true,
  import: 'default',
  query: {
    w: '1200',
    format: 'webp',
    quality: '80',
  },
}) as Record<string, string>

const getImage = (fileName: string) => {
  const key = `../assets/Products/${fileName}`
  const value = productImageModules[key]

  if (!value) {
    throw new Error(`Missing product asset: ${fileName}`)
  }

  return value
}

type SpecRecord = Record<string, string>

const productSpecsByModel = (() => {
  const lines = specsCsv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  if (lines.length === 0) {
    return {} as Record<string, SpecRecord>
  }

  const headers = lines[0].split(',').map((header) => header.trim())
  return lines.slice(1).reduce((acc, line) => {
    const values = line.split(',')
    while (values.length < headers.length) {
      values.push('')
    }
    const record: Record<string, string> = {}
    headers.forEach((header, index) => {
      record[header] = values[index]?.trim() ?? ''
    })
    const model = record['Model']
    if (model) {
      const cleaned: SpecRecord = { Model: model }
      Object.entries(record).forEach(([key, value]) => {
        if (key === 'Model' || key === 'Category') {
          return
        }
        if (value) {
          cleaned[key] = value
        }
      })
      acc[model] = cleaned
    }
    return acc
  }, {} as Record<string, SpecRecord>)
})()

const getSpecRecord = (code: string): SpecRecord => productSpecsByModel[code] ?? { Model: code }

const jetSpecFields: SpecField[] = [
  { label: 'Model', entries: [{ key: '__code' }] },
  {
    label: 'Motor',
    joiner: ' / ',
    entries: [
      { key: 'Motor HP', suffix: ' HP' },
      { key: 'Motor kW', suffix: ' kW' },
    ],
  },
  {
    label: 'Max Pressure',
    joiner: ' / ',
    entries: [
      { key: 'Max Pressure (bar)', suffix: ' bar' },
      { key: 'Max Pressure (psi)', suffix: ' psi' },
    ],
  },
  {
    label: 'Piston Displacement',
    joiner: ' / ',
    entries: [
      { key: 'Piston Displacement (CFM)', suffix: ' CFM' },
      { key: 'Piston Displacement (L/min)', suffix: ' L/min' },
    ],
  },
  {
    label: 'Free Air Delivery',
    joiner: ' / ',
    entries: [
      { key: 'Free Air Delivery (CFM)', suffix: ' CFM' },
      { key: 'Free Air Delivery (L/min)', suffix: ' L/min' },
    ],
  },
  { label: 'Motor Speed', entries: [{ key: 'RPM', suffix: ' RPM' }] },
  { label: 'Pistons', entries: [{ key: 'Pistons (nos)', suffix: ' nos' }] },
  { label: 'Cylinder', entries: [{ key: 'Cylinder (mm)', suffix: ' mm' }] },
  { label: 'Air Receiver', entries: [{ key: 'Tank (L)', suffix: ' L' }] },
  { label: 'Receiver Thickness', entries: [{ key: 'Tank Thickness (mm)', suffix: ' mm' }] },
  { label: 'Voltage', entries: [{ key: 'Voltage (V/Hz/Ph)' }] },
  { label: 'Weight', entries: [{ key: 'Weight (kg)', suffix: ' kg' }] },
  { label: 'Dimensions', entries: [{ key: 'Dimensions (L×W×H mm)' }] },
  { label: 'Variant', entries: [{ key: 'Variant' }] },
]

const silentSpecFields: SpecField[] = [
  { label: 'Model', entries: [{ key: '__code' }] },
  {
    label: 'Motor',
    joiner: ' / ',
    entries: [
      { key: 'Motor HP', suffix: ' HP' },
      { key: 'Motor kW', suffix: ' kW' },
    ],
  },
  {
    label: 'Max Pressure',
    joiner: ' / ',
    entries: [
      { key: 'Max Pressure (bar)', suffix: ' bar' },
      { key: 'Max Pressure (psi)', suffix: ' psi' },
    ],
  },
  {
    label: 'Piston Displacement',
    entries: [{ key: 'Piston Displacement (L/min)', suffix: ' L/min' }],
  },
  {
    label: 'Free Air Delivery',
    entries: [{ key: 'Free Air Delivery (L/min)', suffix: ' L/min' }],
  },
  { label: 'Noise', entries: [{ key: 'Noise (dB)', suffix: ' dB' }] },
  { label: 'Motor Speed', entries: [{ key: 'RPM', suffix: ' RPM' }] },
  { label: 'Air Receiver', entries: [{ key: 'Tank (L)', suffix: ' L' }] },
  { label: 'Receiver Thickness', entries: [{ key: 'Tank Thickness (mm)', suffix: ' mm' }] },
  { label: 'Voltage', entries: [{ key: 'Voltage (V/Hz/Ph)' }] },
  { label: 'Weight', entries: [{ key: 'Weight (kg)', suffix: ' kg' }] },
  { label: 'Dimensions', entries: [{ key: 'Dimensions (L×W×H mm)' }] },
  { label: 'Variant', entries: [{ key: 'Variant' }] },
]

const spiderSpecFields: SpecField[] = [
  { label: 'Model', entries: [{ key: '__code' }] },
  { label: 'Power', entries: [{ key: 'Power (W)', suffix: ' W' }] },
  { label: 'Voltage', entries: [{ key: 'Voltage' }] },
  { label: 'Heating Plate', entries: [{ key: 'Dimensions (mm)' }] },
  { label: 'Weight', entries: [{ key: 'Weight (kg)', suffix: ' kg' }] },
]

const forceSpecFields: SpecField[] = [
  { label: 'Model', entries: [{ key: '__code' }] },
  { label: 'Type', entries: [{ key: 'Type' }] },
  { label: 'Voltage', entries: [{ key: 'Voltage (V)', suffix: ' V' }] },
  { label: 'Amp Rating', entries: [{ key: 'Amp Rating', suffix: ' A' }] },
  { label: 'Ports', entries: [{ key: 'Ports' }] },
  { label: 'Max Pressure', entries: [{ key: 'Max Pressure' }] },
  { label: 'Joint Thread', entries: [{ key: 'Joint Thread' }] },
  { label: 'Relief Valve', entries: [{ key: 'Relief Valve' }] },
  { label: 'Phase', entries: [{ key: 'Phase' }] },
]

export type ProductMetric = {
  label: string
  value: string
  detail?: string
}

export type ProductFeature = {
  title: string
  description: string
}

export type SpecFieldEntry = {
  key: string
  prefix?: string
  suffix?: string
}

export type SpecField = {
  label: string
  entries: SpecFieldEntry[]
  joiner?: string
}

export type ProductModel = {
  code: string
  title: string
  description: string
  image: string
  tags: string[]
  specs: SpecRecord
}

export type ProductCategory = {
  slug: string
  name: string
  shortName: string
  hero: {
    title: string
    subtitle: string
    blueprintImage?: string
  }
  overview: string
  metrics: ProductMetric[]
  differentiators: ProductFeature[]
  qualityNotes: ProductFeature[]
  models: ProductModel[]
  specFields: SpecField[]
  downloads?: { label: string; url: string }[]
}

export const productCatalog: ProductCategory[] = [
  {
    slug: 'jet-series',
    name: 'JET Series — Oil-Lubricated Compressors',
    shortName: 'JET Series',
    hero: {
      title: 'JET Series',
      subtitle: 'Oil-lubricated belt-driven compressors engineered for dependable daily operation.',
    },
    overview:
      'JET Series compressors pair rugged cast assemblies with balanced airflow for workshops, manufacturing floors, and maintenance bays that need dependable pressure on tap.',
    metrics: [
      { label: 'Max Pressure', value: '8 bar', detail: 'Optimised for sustained duty cycles' },
      { label: 'Motor Range', value: '0.75 – 1.5 HP', detail: 'Single & three-phase options' },
      { label: 'Air Delivery', value: 'Up to 22.8 CFM', detail: 'Efficient belt-driven performance' },
    ],
    differentiators: [
      {
        title: 'Balanced Rotary Assembly',
        description: 'Tuned pulleys and belt ratios reduce vibration and extend bearing life during continuous runs.',
      },
      {
        title: 'Service-Friendly Design',
        description: 'Accessible filters and drain points keep maintenance predictable and downtime minimal.',
      },
      {
        title: 'Layered Corrosion Protection',
        description: 'Powder-coated tanks and anodised fittings improve longevity in humid shop conditions.',
      },
    ],
    qualityNotes: [
      {
        title: 'Precision Assembly',
        description:
          'Every compressor is dynamically balanced and pressure-tested to deliver consistent airflow without surge.',
      },
      {
        title: 'Quiet Operation Envelope',
        description:
          'Multi-stage dampening reduces drivetrain resonance, keeping acoustic levels controlled for indoor use.',
      },
    ],
    models: [
      {
        code: 'JET-S100H25LACA',
        title: 'JET S100H25 • Package A',
        description: 'Compact footprint with horizontal 100-litre storage for light industrial bays.',
        image: getImage('JET-S100H25LACA.png'),
        tags: ['100 L tank', 'Balanced for starter workflows', 'Single-phase ready'],
        specs: getSpecRecord('JET-S100H25LACA'),
      },
      {
        code: 'JET-S100H25LACB',
        title: 'JET S100H25 • Package B',
        description: 'Adds quick-service manifold controls for multi-tool stations.',
        image: getImage('JET-S100H25LACB.png'),
        tags: ['Remote drain kit', 'Dual outlet block', 'Enhanced cooling shroud'],
        specs: getSpecRecord('JET-S100H25LACB'),
      },
      {
        code: 'JET-S100H25LACC',
        title: 'JET S100H25 • Package C',
        description: 'Includes reinforced motor base for rough-duty shop environments.',
        image: getImage('JET-S100H25LACC.png'),
        tags: ['Heavy floor anchor', 'Premium belt guard', 'Service counter included'],
        specs: getSpecRecord('JET-S100H25LACC'),
      },
      {
        code: 'JET-S150H25LACA',
        title: 'JET S150H25 • Package A',
        description: '150-litre tank capacity for higher air reserve and fewer motor cycles.',
        image: getImage('JET-S150H25LACA.png'),
        tags: ['150 L tank', 'Low cycle demand', 'Single-phase core'],
        specs: getSpecRecord('JET-S150H25LACA'),
      },
      {
        code: 'JET-S150H25LACB',
        title: 'JET S150H25 • Package B',
        description: 'Shop-ready configuration with isolation mounts and staged filtration.',
        image: getImage('JET-S150H25LACB.png'),
        tags: ['Isolation mounts', 'Quick-change filters', 'Shop floor kit'],
        specs: getSpecRecord('JET-S150H25LACB'),
      },
      {
        code: 'JET-S150H25LACC',
        title: 'JET S150H25 • Package C',
        description: 'Enhanced cooling and belt longevity for continuous heavy-load applications.',
        image: getImage('JET-S150H25LACC.png'),
        tags: ['High airflow shroud', 'Wear-resistant belts', 'Long-cycle duty'],
        specs: getSpecRecord('JET-S150H25LACC'),
      },
      {
        code: 'JET-S150H40LACA',
        title: 'JET S150H40 • Package A',
        description: 'High-output variant tuned for toolrooms with extended airflow demand.',
        image: getImage('JET-S150H40LACA.png'),
        tags: ['High CFM tier', 'Extended duty motor', 'Toolroom ready'],
        specs: getSpecRecord('JET-S150H40LACA'),
      },
      {
        code: 'JET-S150H40LACB',
        title: 'JET S150H40 • Package B',
        description: 'Integrated aftercooler assembly keeps delivery temperatures controlled.',
        image: getImage('JET-S150H40LACB.png'),
        tags: ['Aftercooler', 'Condensate management', 'Thermal monitor'],
        specs: getSpecRecord('JET-S150H40LACB'),
      },
      {
        code: 'JET-S150H40LACC',
        title: 'JET S150H40 • Package C',
        description: 'Adds tri-phase compatibility and heavy-duty motor protection.',
        image: getImage('JET-S150H40LACC.png'),
        tags: ['Three-phase ready', 'Thermal overload guard', 'Panel interface'],
        specs: getSpecRecord('JET-S150H40LACC'),
      },
      {
        code: 'JET-S150H60LACA',
        title: 'JET S150H60 • Package A',
        description: 'Extended reserve for pneumatic lines supporting simultaneous operations.',
        image: getImage('JET-S150H60LACA.png'),
        tags: ['60 Hz tune', 'Parallel tool support', 'Continuous service'],
        specs: getSpecRecord('JET-S150H60LACA'),
      },
      {
        code: 'JET-S150H60LACB',
        title: 'JET S150H60 • Package B',
        description: 'Full-feature assembly with multi-port distribution and vibration control.',
        image: getImage('JET-S150H60LACB.png'),
        tags: ['Distribution block', 'Vibration isolation', 'Industrial harness'],
        specs: getSpecRecord('JET-S150H60LACB'),
      },
      {
        code: 'JET-S150H60LACC',
        title: 'JET S150H60 • Package C',
        description: 'Performance-tuned for demanding fabrication cells with high airflow peaks.',
        image: getImage('JET-S150H60LACC.png'),
        tags: ['High peak capacity', 'Fabrication cell ready', 'Hardened guards'],
        specs: getSpecRecord('JET-S150H60LACC'),
      },
    ],
    specFields: jetSpecFields,
  },
  {
    slug: 'silent-series',
    name: 'SILENT Series — Oil-Free Compressors',
    shortName: 'SILENT Series',
    hero: {
      title: 'SILENT Series',
      subtitle: 'Oil-free, low-noise compressors designed for labs, clinics, and precision environments.',
    },
    overview:
      'SILENT Series systems deliver clean, moisture-controlled air with acoustic performance tailored for sensitive indoor environments.',
    metrics: [
      { label: 'Sound Pressure', value: '< 70 dB', detail: 'Quiet enough for treatment areas' },
      { label: 'Motor Output', value: 'Up to 3.0 kW', detail: 'Scaled for multi-station demand' },
      { label: 'Storage Capacity', value: 'Up to 105 L', detail: 'Vertical and horizontal formats' },
    ],
    differentiators: [
      {
        title: 'Oil-Free Compression',
        description: 'Deliver contaminant-free air streams suitable for dental, medical, and lab processes.',
      },
      {
        title: 'Progressive Acoustic Shielding',
        description: 'Layered sound insulation and low-RPM operation keep audible levels pleasant in occupied rooms.',
      },
      {
        title: 'Smart Moisture Management',
        description: 'Integrated dryers and condensate routing preserve air quality without manual intervention.',
      },
    ],
    qualityNotes: [
      {
        title: 'Redundant Safety Controls',
        description:
          'Dual pressure switches and thermal monitoring maintain stability even during prolonged peak demand.',
      },
      {
        title: 'Plug-and-Run Installation',
        description: 'Factory pre-wired assemblies accelerate deployment and reduce commissioning effort.',
      },
    ],
    models: [
      {
        code: 'SILENT-S150H12LACB',
        title: 'SILENT S150H12 • Dual-Station',
        description: 'Compact, whisper-quiet unit ideal for small clinical suites.',
        image: getImage('SILENT-S150H12LACB.png'),
        tags: ['Low acoustic footprint', 'Dual outlet ready', 'Plug-and-play'],
        specs: getSpecRecord('SILENT-S150H12LACB'),
      },
      {
        code: 'SILENT-S150H12LACC',
        title: 'SILENT S150H12 • Clean Room Pack',
        description: 'Includes intake filtration and medical-grade fittings.',
        image: getImage('SILENT-S150H12LACC.png'),
        tags: ['HEPA intake filter', 'Medical-grade fittings', '24/7 assurance'],
        specs: getSpecRecord('SILENT-S150H12LACC'),
      },
      {
        code: 'SILENT-S150H25LACB',
        title: 'SILENT S150H25 • Lab Suite',
        description: 'Scales quietly for multi-bench laboratory applications.',
        image: getImage('SILENT-S150H25LACB.png'),
        tags: ['Multi-bench capacity', 'Dryer ready', 'Low vibration'],
        specs: getSpecRecord('SILENT-S150H25LACB'),
      },
      {
        code: 'SILENT-S150H25LACC',
        title: 'SILENT S150H25 • Hygienic Pack',
        description: 'Enhanced condensate management for sterile workflows.',
        image: getImage('SILENT-S150H25LACC.png'),
        tags: ['Condensate routing', 'Washdown friendly', 'Hygienic design'],
        specs: getSpecRecord('SILENT-S150H25LACC'),
      },
      {
        code: 'SILENT-S150H40LACB',
        title: 'SILENT S150H40 • Research Pack',
        description: 'High-flow oil-free air with calibrated regulation for instruments.',
        image: getImage('SILENT-S150H40LACB.png'),
        tags: ['High-flow stability', 'Instrument ready', 'Precision regulators'],
        specs: getSpecRecord('SILENT-S150H40LACB'),
      },
      {
        code: 'SILENT-S150H40LACC',
        title: 'SILENT S150H40 • Isolation Pack',
        description: 'Adds acoustic canopy and remote monitoring suite.',
        image: getImage('SILENT-S150H40LACC.png'),
        tags: ['Acoustic canopy', 'Monitoring gateway', 'Facility integration'],
        specs: getSpecRecord('SILENT-S150H40LACC'),
      },
      {
        code: 'SILENT-S150H60LACB',
        title: 'SILENT S150H60 • Facility Pack',
        description: 'Serves larger healthcare departments with stable oil-free delivery.',
        image: getImage('SILENT-S150H60LACB.png'),
        tags: ['High capacity', 'Facility tie-in', 'Optimised duty cycle'],
        specs: getSpecRecord('SILENT-S150H60LACB'),
      },
      {
        code: 'SILENT-S150H60LACC',
        title: 'SILENT S150H60 • Compliance Pack',
        description: 'Regulatory-ready package with full documentation and alarms.',
        image: getImage('SILENT-S150H60LACC.png'),
        tags: ['Regulatory pack', 'Alarm stack', 'Documented QC'],
        specs: getSpecRecord('SILENT-S150H60LACC'),
      },
      {
        code: 'SILENT-S300H80LACB',
        title: 'SILENT S300H80 • High Output',
        description: 'Twin-motor architecture keeps acoustic levels low even at peak draw.',
        image: getImage('SILENT-S300H80LACB.png'),
        tags: ['Twin motor', 'Low acoustic load', 'Peak resiliency'],
        specs: getSpecRecord('SILENT-S300H80LACB'),
      },
      {
        code: 'SILENT-S300H80LACC',
        title: 'SILENT S300H80 • Sterile Pack',
        description: 'Hygienic cladding and redundant filtration for clean environments.',
        image: getImage('SILENT-S300H80LACC.png'),
        tags: ['Hygienic cladding', 'Dual filtration', 'Continuous compliance'],
        specs: getSpecRecord('SILENT-S300H80LACC'),
      },
      {
        code: 'SILENT-S300H105LACB',
        title: 'SILENT S300H105 • Network Pack',
        description: 'Supports networked distribution with balanced, oil-free airflow.',
        image: getImage('SILENT-S300H105LACB.png'),
        tags: ['Network-ready', 'Digital monitoring', 'Large capacity'],
        specs: getSpecRecord('SILENT-S300H105LACB'),
      },
      {
        code: 'SILENT-S300H105LACC',
        title: 'SILENT S300H105 • Ultra Quiet',
        description: 'Acoustic shell and vibration isolation for sound-critical spaces.',
        image: getImage('SILENT-S300H105LACC.png'),
        tags: ['Ultra-quiet', 'Isolation mounts', 'Sound critical'],
        specs: getSpecRecord('SILENT-S300H105LACC'),
      },
    ],
    specFields: silentSpecFields,
  },
  {
    slug: 'spider-series',
    name: 'SPIDER Series — Vulcanizing Machines',
    shortName: 'SPIDER Series',
    hero: {
      title: 'SPIDER Series',
      subtitle: 'Precision vulcanizing systems for rapid bonding and tyre repair operations.',
    },
    overview:
      'SPIDER Series vulcanizers pair responsive temperature control with rugged clamping hardware, suited for both field service and industrial maintenance cells.',
    metrics: [
      { label: 'Heating Output', value: '750 – 1500 W', detail: 'Selectable cartridge options' },
      { label: 'Form Factors', value: 'Portable & Bench', detail: 'Modular clamping assemblies' },
      { label: 'Thermal Safety', value: 'Auto Protection', detail: 'Integrated thermal cut-offs' },
    ],
    differentiators: [
      {
        title: 'Adaptive Clamping Plane',
        description: 'Ratchet-based geometry conforms to varied carcass profiles without hot spots.',
      },
      {
        title: 'Temperature Intelligence',
        description: 'Closed-loop thermal sensing maintains precise curing curves.',
      },
      {
        title: 'Mobility Ready',
        description: 'Compact frames with quick-deploy stands for on-site tyre support crews.',
      },
    ],
    qualityNotes: [
      {
        title: 'Operator Safe Controls',
        description: 'Low-voltage control surfaces and ergonomic handles reduce fatigue and risk.',
      },
      {
        title: 'Durable Build',
        description: 'Heat-treated fixtures and anodised plates withstand repetitive service cycles.',
      },
    ],
    models: [
      {
        code: 'SPIDER-S0750WM',
        title: 'SPIDER S0750 • Field Kit',
        description: 'Portable vulcanizer with compact heating plate for rapid roadside repairs.',
        image: getImage('SPIDER.png'),
        tags: ['750 W', 'Compact plate', 'Field ready'],
        specs: getSpecRecord('SPIDER-S0750WM'),
      },
      {
        code: 'SPIDER-S1000WA',
        title: 'SPIDER S1000 • Workshop Pack',
        description: 'Balanced footprint ideal for service bays needing quick turnaround.',
        image: getImage('SPIDER.png'),
        tags: ['1000 W', 'Workshop tuned', 'Stable clamping'],
        specs: getSpecRecord('SPIDER-S1000WA'),
      },
      {
        code: 'SPIDER-S1500WA',
        title: 'SPIDER S1500 • Industrial Pack',
        description: 'High-output assembly built for industrial maintenance crews.',
        image: getImage('SPIDER.png'),
        tags: ['1500 W', 'Industrial duty', 'Extended plate'],
        specs: getSpecRecord('SPIDER-S1500WA'),
      },
    ],
    specFields: spiderSpecFields,
  },
  {
    slug: 'force-series',
    name: 'FORCE Series — Pressure Switches',
    shortName: 'FORCE Series',
    hero: {
      title: 'FORCE Series',
      subtitle: 'Heavy-duty pressure switches offering precise cut-in and cut-out control.',
    },
    overview:
      'FORCE Series switchgear provides reliable pressure control for compressor banks and process systems, with configurable thresholds and robust sealing.',
    metrics: [
      { label: 'Max Pressure', value: '150 PSI', detail: 'Engineered for compressor duty' },
      { label: 'Port Layout', value: '¼″ BSP, 4-Port', detail: 'Flexible integration' },
      { label: 'Control Logic', value: 'Auto Reset', detail: 'Adjustable cut-in & cut-out' },
    ],
    differentiators: [
      {
        title: 'Precision Calibration',
        description: 'Factory calibrated springs ensure cut-in/cut-out accuracy out of the box.',
      },
      {
        title: 'Ingress Protection',
        description: 'Sealed housings protect against dust and moisture in industrial settings.',
      },
      {
        title: 'Service Flexibility',
        description: 'Four-port manifold supports gauges, relief valves, and downstream lines.',
      },
    ],
    qualityNotes: [
      {
        title: 'Safety Tested',
        description: 'Every switch is endurance tested across thousands of cycles before dispatch.',
      },
      {
        title: 'Field Friendly',
        description: 'Accessible terminal layout simplifies retrofits and maintenance calls.',
      },
    ],
    models: [
      {
        code: 'FORCE-S4P1P',
        title: 'FORCE S4P1P Pressure Switch',
        description: '4-port pressure switch with adjustable cut-in and cut-out points.',
        image: getImage('FORCE-S4P1PPS.png'),
        tags: ['Powder-coated housing', 'Auto reset', 'Compressor ready'],
        specs: getSpecRecord('FORCE-S4P1P'),
      },
    ],
    specFields: forceSpecFields,
  },
]

export const productCatalogBySlug = Object.fromEntries(productCatalog.map((category) => [category.slug, category]))
