// ===== DATA =====
const WAX_DATA = {
  soy:        { name: 'Soja',         melt: '70-80°C', pour: '55-65°C',  burn: 'Limpia, ecológica',    color: '#F5E6D3' },
  beeswax:    { name: 'Cera de Abeja', melt: '63-70°C', pour: '60-70°C',  burn: 'Natural, purificante', color: '#F0D68A' },
  coconut:    { name: 'Coco',          melt: '24-35°C', pour: '40-50°C',  burn: 'Ultra suave, sedosa',  color: '#FFFEF2' },
  paraffin:   { name: 'Parafina',      melt: '47-65°C', pour: '60-70°C',  burn: 'Gran aroma, económica',color: '#FFFFF0' }
};

const SCENT_DATA = {
  lavender:    { name: 'Lavanda',     icon: '💜', props: ['Relajante', 'Anti-insomnio', 'Ansiolítico'],   desc: 'La lavanda es el aceite esencial más versátil. Reduce cortisol, favorece el sueño profundo y alivia dolores de cabeza. Ideal para meditación y espacios de descanso.', best: 'Mejor para: antes de dormir, yoga, meditación', mainProp: 'Relajante', notes: 'Notas florales herbáceas con toques balsámicos' },
  vanilla:     { name: 'Vainilla',    icon: '🍦', props: ['Reconfortante', 'Antiestrés', 'Alegre'],        desc: 'La vainilla estimula la liberación de serotonina. Su aroma cálido y dulce crea sensación de hogar y seguridad. Perfecta para reducir la ansiedad y mejorar el estado de ánimo.', best: 'Mejor para: noches de invierno, relajación social', mainProp: 'Reconfortante', notes: 'Notas dulces cálidas con fondo amaderado' },
  eucalyptus:  { name: 'Eucalipto',   icon: '🌿', props: ['Descongestionante', 'Energizante', 'Purificante'], desc: 'El eucalipto abre las vías respiratorias y fortalece el sistema inmune. Su aroma fresco despierta la mente y combate la fatiga mental. Excelente para resfriados.', best: 'Mejor para: gripes, estudio, trabajo', mainProp: 'Energizante', notes: 'Notas frescas mentoladas con fondo herbáceo' },
  rose:        { name: 'Rosa',         icon: '🌹', props: ['Afrodisíaco', 'Armonizante', 'Calmante'],       desc: 'El aceite de rosa equilibra emociones, reduce la ansiedad y promueve el amor propio. Es el aroma más asociado con la sanación emocional y el corazón.', best: 'Mejor para: parejas, autoestima, sanación emocional', mainProp: 'Armonizante', notes: 'Notas florales dulces con toques miel' },
  sandalwood:  { name: 'Sándalo',      icon: '🪵', props: ['Meditación', 'Enfoque', 'Espiritual'],         desc: 'El sándalo calma el sistema nervioso y favorece estados profundos de concentración. Usado milenariamente en rituales espirituales y meditación.', best: 'Mejor para: meditación, oración, enfoque profundo', mainProp: 'Meditativo', notes: 'Notas amaderadas cremosas con fondo especiado' },
  cinnamon:    { name: 'Canela',       icon: '🟤', props: ['Estimulante', 'Circulación', 'Acogedor'],       desc: 'La canela mejora la circulación sanguínea y estimula la mente. Su aroma cálido y especiado evoca hogar y celebración. Usar con moderación por su intensidad.', best: 'Mejor para: tardes frías, concentración, festividades', mainProp: 'Estimulante', notes: 'Notas especiadas cálidas con toques dulces' },
  jasmine:     { name: 'Jazmín',       icon: '🌸', props: ['Antidepresivo', 'Confianza', 'Romántico'],     desc: 'El jazmín es un potente antidepresivo natural. Aumenta la confianza, reduce el miedo y promueve sentimientos de optimismo. Su dulce aroma nocturno favorece sueños positivos.', best: 'Mejor para: estados de ánimo bajos, romanticismo', mainProp: 'Elevador', notes: 'Notas florales exóticas con fondo animal' },
  peppermint:  { name: 'Menta',        icon: '🍃', props: ['Energizante', 'Analgésico', 'Claridad'],       desc: 'La menta pimienta es estimulante y analgésica. Alivia dolores musculares, mejora la concentración y combate la fatiga. Su frescura instantánea despierta los sentidos.', best: 'Mejor para: mañanas, ejercicio, dolor de cabeza', mainProp: 'Vigorizante', notes: 'Notas frescas pungentes con fondo herbáceo' },
  chamomile:   { name: 'Manzanilla',   icon: '🌼', props: ['Calma', 'Sueño', 'Digestivo'],                 desc: 'La manzanilla es suave pero poderosa. Calma nervios, favorece la digestión y prepara el cuerpo para el sueño. Ideal para niños y personas sensibles.', best: 'Mejor para: antes de dormir, niños, sensibilidad', mainProp: 'Tranquilizante', notes: 'Notas herbales dulces con fondo manzano' },
  ylang:       { name: 'Ylang Ylang',  icon: '🌺', props: ['Euforia suave', 'Hipotensor', 'Sensual'],       desc: 'El ylang ylang reduce la presión arterial y crea sensación de euforia suave. Es afrodisíaco, regula emociones intensas y promueve la alegría. Aroma floral exótico.', best: 'Mejor para: relajación sensual, meditación cardíaca', mainProp: 'Euforizante', notes: 'Notas florales intensas con fondo frutal' },
  tea_tree:    { name: 'Árbol de Té',  icon: '🌲', props: ['Antibacteriano', 'Antifúngico', 'Purificante'], desc: 'El árbol de té es uno de los aceites más potentes antimicrobianos. Combate bacterias, hongos y virus. Acelera la cicatrización y purifica el aire del hogar.', best: 'Mejor para: resfriados, limpieza, acné, protección energética', mainProp: 'Antimicrobiano', notes: 'Notas frescas herbáceas con fondo medicinal' },
  lemon:       { name: 'Limón',        icon: '🍋', props: ['Energizante', 'Purificante', 'Concentración'],  desc: 'El aceite de limón eleva el ánimo instantáneamente y aclara la mente. Es purificante, desinfectante natural y mejora la concentración. Combate la fatiga mental.', best: 'Mejor para: mañanas, estudiar, purificar espacios, fatiga', mainProp: 'Energizante', notes: 'Notas cítricas brillantes con fondo limpio y verde' },
  orange:      { name: 'Naranja',      icon: '🍊', props: ['Alegre', 'Relajante', 'Digestivo'],             desc: 'La naranja dulce es el aceite de la alegría. Reduce la ansiedad sin somnolencia, mejora la digestión y crea un ambiente cálido y positivo. Seguro para niños.', best: 'Mejor para: niños, ánimo bajo, digestión, ambiente familiar', mainProp: 'Alegría', notes: 'Notas cítricas dulces con fondo acogedor' },
  rosemary:    { name: 'Romero',       icon: '🌿', props: ['Estimulante', 'Memoria', 'Antidolor'],          desc: 'El romero mejora la memoria y la concentración. Alivia dolores musculares, estimula la circulación capilar y combate la fatiga intelectual.', best: 'Mejor para: estudiar, exámenes, dolor muscular, concentración', mainProp: 'Mental', notes: 'Notas herbáceas camforadas con fondo amaderado' },
  frankincense:{ name: 'Incienso',     icon: '✨', props: ['Espiritual', 'Antiinflamatorio', 'Meditación'], desc: 'El incienso o frankincense es el aceite sagrado por excelencia. Antiinflamatorio potente, favorece la meditación profunda y la conexión espiritual.', best: 'Mejor para: meditación, oración, rituales, sanación emocional', mainProp: 'Sagrado', notes: 'Notas resinosas balsámicas con fondo cálido' },
  patchouli:   { name: 'Pachulí',      icon: '🍃', props: ['Afrodisíaco', 'Estabilizador', 'Grounding'],    desc: 'El pachulí es un potente estabilizador emocional y afrodisíaco. Su aroma terroso profundo ancla, reduce la ansiedad y promueve la sensualidad.', best: 'Mejor para: ansiedad, sensualidad, grounding, meditación terrenal', mainProp: 'Anclaje', notes: 'Notas terrosas musgosas con fondo dulce' },
  bergamot:    { name: 'Bergamota',    icon: '🍋', props: ['Antidepresivo', 'Calma', 'Elevador'],          desc: 'La bergamota es el aceite anti-ansiedad por excelencia. Eleva el ánimo sin sedar, reduce el cortisol y alivia estados depresivos. Componente clave del Earl Grey.', best: 'Mejor para: ansiedad, depresión, estrés laboral, confianza', mainProp: 'Anti-ansiedad', notes: 'Notas cítricas florales con fondo verde' },
  cedarwood:   { name: 'Cedro',        icon: '🪵', props: ['Calma', 'Purificante', 'Grounding'],           desc: 'El cedro aporta calma y estabilidad. Purifica el aire, repele insectos y favorece la meditación con su aroma amaderado. Excelente para el sistema respiratorio.', best: 'Mejor para: meditación, purificar, repeler insectos, tos', mainProp: 'Estabilidad', notes: 'Notas amaderadas secas con fondo balsámico' },
  geranium:    { name: 'Geranio',      icon: '🌸', props: ['Equilibrante', 'Hormonal', 'Regenerador'],     desc: 'El geranio equilibra el sistema hormonal, especialmente en mujeres. Regula emociones, favorece la regeneración celular y equilibra la producción de sebo.', best: 'Mejor para: equilibrio hormonal, PMS, piel mixta, equilibrio emocional', mainProp: 'Equilibrante', notes: 'Notas florales rosadas con fondo dulce' },
  clarysage:   { name: 'Salvia Esclarea', icon: '💜', props: ['Hormonal', 'Euforia', 'Calma'],           desc: 'La salvia esclarea regula las hormonas femeninas, alivia PMS y menopausia. Su aroma herbal-dulce induce euforia suave y reduce la ansiedad.', best: 'Mejor para: PMS, menopausia, euforia, equilibrio hormonal', mainProp: 'Hormonal', notes: 'Notas herbáceas dulces con fondo almizclado' },
  lemongrass:  { name: 'Lemongrass',   icon: '🌿', props: ['Repelente', 'Purificante', 'Energizante'],     desc: 'El lemongrass combina aroma cítrico con propiedades insecticidas potentes. Purifica el aire, repela mosquitos y mejora la claridad mental.', best: 'Mejor para: repeler insectos, verano, purificar, eliminar olores', mainProp: 'Frescura cítrica', notes: 'Notas cítricas terrosas con fondo herbáceo' },
  cypress:     { name: 'Ciprés',       icon: '🌲', props: ['Descongestionante', 'Refrescante', 'Circulación'], desc: 'El ciprés reduce la sudoración excesiva, mejora la circulación venosa y descongestiona vías respiratorias. Su aroma fresco-amaderado es elegante.', best: 'Mejor para: circulación, vías respiratorias, cambios de estación', mainProp: 'Refrescante', notes: 'Notas amaderadas frescas con fondo balsámico' },
  pine:        { name: 'Pino',         icon: '🌲', props: ['Descongestionante', 'Energizante', 'Forestal'], desc: 'El pino purifica el aire, abre los bronquios y energiza. Evoca bosques y naturaleza. Muy usado en invierno para resfriados y limpieza del hogar.', best: 'Mejor para: resfriados, limpieza, invierno, bosque', mainProp: 'Forestal', notes: 'Notas balsámicas frescas con fondo resinoso' },
  neroli:      { name: 'Neroli',       icon: '🌸', props: ['Regenerador', 'Antidepresivo', 'Calma'],      desc: 'El neroli (azahar) regenera el sistema nervioso. Reduce ataques de pánico, calma la ansiedad profunda y favorece el sueño reparador. Uno de los más terapéuticos.', best: 'Mejor para: pánico, insomnio, shock emocional, piel madura', mainProp: 'Regenerador', notes: 'Notas florales verdes con fondo miel y cítrico' },
  ginger:      { name: 'Jengibre',     icon: '🟤', props: ['Caliente', 'Estimulante', 'Antiinflamatorio'], desc: 'El jengibre calienta, estimula la circulación y alivia dolores musculares y articulares. Combate náuseas y fatiga. Su aroma especiado es energizante.', best: 'Mejor para: dolor muscular, náuseas, frío, fatiga, circulación', mainProp: 'Calentador', notes: 'Notas especiadas picantes con fondo cálido' },
  blackpepper: { name: 'Pimienta Negra', icon: '⚫', props: ['Estimulante', 'Caliente', 'Analgesico'],    desc: 'La pimienta negra estimula la circulación, calienta músculos y alivia dolores articulares. Su aroma especiado energiza y motiva. Excelente para deportistas.', best: 'Mejor para: dolor muscular, circulación, deportistas, motivación', mainProp: 'Estimulante', notes: 'Notas especiadas picantes con fondo cálido' },
  palosanto:   { name: 'Palo Santo',   icon: '✨', props: ['Purificante', 'Espiritual', 'Creatividad'],    desc: 'El palo santo es madera sagrada sudamericana. Purifica energías, eleva la vibración del espacio y favorece la creatividad. Su aroma dulce y místico es único.', best: 'Mejor para: limpieza energética, creatividad, meditación, ritual', mainProp: 'Purificación', notes: 'Notas maderadas dulces con fondo mentolado' },
  mandarina:   { name: 'Mandarina',    icon: '🍊', props: ['Relajante', 'Alegre', 'Digestivo'],            desc: 'La mandarina es el aceite cítrico más suave. Calma sin sedar, reduce el estrés infantil y favorece la digestión. Su aroma festivo es perfecto para niños.', best: 'Mejor para: niños, embarazadas, ansiedad leve, Navidad', mainProp: 'Dulzura', notes: 'Notas cítricas dulces afrutadas con fondo floral' },
  honey:       { name: 'Miel',         icon: '🍯', props: ['Reconfortante', 'Nutritivo', 'Cálido'],        desc: 'La esencia de miel aporta un aroma dulce, cálido y envolvente. Evoca hogar, seguridad y bienestar. Nutre la piel, calma la mente y crea ambientes acogedores. Sinergiza perfectamente con vainilla, canela y cítricos.', best: 'Mejor para: hogar, invierno, ansiedad, reconfortar, regalos', mainProp: 'Reconfortante', notes: 'Notas dulces cálidas con fondo floral y caramelo' }
};

const CONTAINER_NAMES = { jar: 'Frasco', tin: 'Lata', pillar: 'Pilar', teacup: 'Taza' };
const SIZE_NAMES = { small: 'Pequeña', medium: 'Mediana', large: 'Grande' };
const SIZE_DATA = { small: { grams: 120, hours: 20 }, medium: { grams: 250, hours: 40 }, large: { grams: 500, hours: 80 } };

// ===== STATE =====
const state = {
  wax: 'soy', scents: ['lavender'], ratios: null, color: '#F5E6D3', container: 'jar', size: 'medium'
};

// ===== ESSENTIAL OILS KNOWLEDGE BASE =====
const OILS_DB = {
  'arbol de te':     { name: 'Árbol de Té',    icon: '🌲', props: ['Antibacteriano', 'Antifúngico', 'Cicatrizante'],     desc: 'El árbol de té es uno de los aceites más potentes antimicrobianos. Combaten bacterias, hongos y virus. Acelera la cicatrización de heridas y es excelente para purificar el aire. Muy utilizado en limpieza energética.', best: 'Mejor para: resfriados, limpieza del hogar, acné, hongos, protección energética', mainProp: 'Antimicrobiano', notes: 'Notas frescas herbáceas con fondo medicinal y alcanforado' },
  'tea tree':        { name: 'Árbol de Té',    icon: '🌲', props: ['Antibacteriano', 'Antifúngico', 'Cicatrizante'],     desc: 'El árbol de té es uno de los aceites más potentes antimicrobianos. Combaten bacterias, hongos y virus. Acelera la cicatrización de heridas y es excelente para purificar el aire.', best: 'Mejor para: resfriados, limpieza del hogar, acné, hongos', mainProp: 'Antimicrobiano', notes: 'Notas frescas herbáceas con fondo medicinal' },
  'limon':           { name: 'Limón',          icon: '🍋', props: ['Energizante', 'Purificante', 'Concentración'],       desc: 'El aceite de limón eleva el ánimo instantáneamente y aclara la mente. Es purificante, desinfectante natural y mejora la concentración. Su aroma cítrico fresco combate la fatiga mental.', best: 'Mejor para: mañanas, estudiar, purificar espacios, fatiga mental', mainProp: 'Energizante', notes: 'Notas cítricas brillantes con fondo limpio y verde' },
  'naranja':         { name: 'Naranja',        icon: '🍊', props: ['Alegre', 'Relajante', 'Digestivo'],                  desc: 'La naranja dulce es el aceite de la alegría. Reduce la ansiedad sin causar somnolencia, mejora la digestión y crea un ambiente cálido y positivo. Seguro para niños.', best: 'Mejor para: niños, ánimo bajo, digestión, ambiente familiar', mainProp: 'Alegría', notes: 'Notas cítricas dulces con fondo acogedor y frutal' },
  'romero':          { name: 'Romero',         icon: '🌿', props: ['Estimulante', 'Memoria', 'Antidolor'],              desc: 'El romero mejora la memoria y la concentración (estudios lo confirman). Alivia dolores musculares y articulares, estimula la circulación capilar y combate la fatiga intelectual.', best: 'Mejor para: estudiar, exámenes, dolor muscular, caída del cabello', mainProp: 'Mental', notes: 'Notas herbáceas camforadas con fondo amaderado y verde' },
  'incienso':        { name: 'Incienso (Frankincense)', icon: '✨', props: ['Espiritual', 'Antiinflamatorio', 'Meditación'], desc: 'El incienso o frankincense es el aceite sagrado por excelencia, usado desde la antigüedad en rituales. Potente antiinflamatorio, favorece la meditación profunda y la conexión espiritual. Apoya la respiración profunda.', best: 'Mejor para: meditación profunda, oración, rituales, sanación emocional', mainProp: 'Sagrado', notes: 'Notas resinosas balsámicas con fondo cálido y especiado' },
  'patchouli':       { name: 'Pachulí',        icon: '🍃', props: ['Afrodisíaco', 'Estabilizador', 'Antidepresivo'],    desc: 'El pachulí es un potente estabilizador emocional y afrodisíaco. Su aroma terroso y profundo ancla, reduce la ansiedad y promueve la sensualidad. También repelente natural de insectos.', best: 'Mejor para: ansiedad, sensualidad, grounding, meditación terrenal', mainProp: 'Anclaje', notes: 'Notas terrosas musgosas con fondo dulce y amaderado' },
  'geranio':         { name: 'Geranio',        icon: '🌸', props: ['Equilibrante', 'Hormonal', 'Regenerador'],          desc: 'El geranio equilibra el sistema hormonal, especialmente en mujeres. Regula emociones, favorece la regeneración celular de la piel y es excelente para equilibrar la producción de sebo.', best: 'Mejor para: equilibrio hormonal, PMS, piel mixta, equilibrio emocional', mainProp: 'Equilibrante', notes: 'Notas florales rosadas con fondo mentolado y dulce' },
  'cedro':           { name: 'Cedro',          icon: '🪵', props: ['Calma', 'Purificante', 'Insecticida'],              desc: 'El cedro aporta calma y estabilidad. Purifica el aire, repele insectos naturalmente y favorece la meditación con su aroma amaderado. Excelente para el sistema respiratorio.', best: 'Mejor para: meditación, purificar espacios, repeler insectos, tos', mainProp: 'Estabilidad', notes: 'Notas amaderadas secas con fondo balsámico y cálido' },
  'bergamota':       { name: 'Bergamota',      icon: '🍋', props: ['Antidepresivo', 'Calma', 'Elevador'],               desc: 'La bergamota es el aceite anti-ansiedad por excelencia. Eleva el ánimo sin sedar, reduce el cortisol y alivia estados depresivos. Es el componente clave del Earl Grey. Evitar exposición solar tras uso tópico.', best: 'Mejor para: ansiedad, depresión, estrés laboral, confianza social', mainProp: 'Anti-ansiedad', notes: 'Notas cítricas florales con fondo verde y ligeramente amargo' },
  'clavo':           { name: 'Clavo',          icon: '🟤', props: ['Analgésico', 'Antiséptico', 'Estimulante'],          desc: 'El clavo es uno de los analgésicos naturales más potentes (eugenol). Alivia dolores dentales, musculares y articulares. Es antiséptico, estimula la circulación y calienta. Usar con moderación por su intensidad.', best: 'Mejor para: dolor dental, dolor muscular, circulación, resfriados', mainProp: 'Analgésico', notes: 'Notas especiadas intensas con fondo dulce y cálido' },
  'ylang':           { name: 'Ylang Ylang',    icon: '🌺', props: ['Euforia suave', 'Hipotensor', 'Sensual'],            desc: 'El ylang ylang reduce la presión arterial y crea sensación de euforia suave. Es afrodisíaco, regula emociones intensas y promueve la alegría. Aroma floral exótico.', best: 'Mejor para: relajación sensual, meditación cardíaca, euforia', mainProp: 'Euforizante', notes: 'Notas florales intensas con fondo frutal y exótico' },
  'citronela':       { name: 'Citronela',      icon: '🌿', props: ['Repelente', 'Purificante', 'Frescurente'],           desc: 'La citronela es el repelente de insectos natural más conocido. Purifica el aire, refresca espacios y tiene propiedades antifúngicas. Ideal para exteriores y verano.', best: 'Mejor para: repeler mosquitos, verano, exteriores, limpieza', mainProp: 'Repelente', notes: 'Notas cítricas herbáceas con fondo verde y fresco' },
  'sassafras':       { name: 'Sasafrás',       icon: '🌿', props: ['Descongestionante', 'Caliente', 'Estimulante'],      desc: 'El sasafrás descongestiona vías respiratorias y estimula la circulación. Su aroma especiado y cálido crea ambientes acogedores. Usar en baja concentración.', best: 'Mejor para: resfriados, circulación, ambientes invernales', mainProp: 'Descongestionante', notes: 'Notas especiadas dulces con fondo raíz y terroso' },
  'cilantro':        { name: 'Cilantro',       icon: '🌿', props: ['Digestivo', 'Desintoxicante', 'Antiespasmódico'],   desc: 'El cilantro alivia problemas digestivos, espasmos estomacales y tiene efecto desintoxicante. Su aroma fresco y verde es revitalizante y mejora el apetito.', best: 'Mejor para: digestión, espasmos, desintoxicar, pérdida de apetito', mainProp: 'Digestivo', notes: 'Notas verdes frescas con fondo herbáceo y especiado' },
  'albahaca':        { name: 'Albahaca',       icon: '🌿', props: ['Estimulante', 'Antiespasmódico', 'Claridad'],        desc: 'La albahaca clarifica la mente, alivia dolores de cabeza y reduce la fatiga nerviosa. Es antiespasmódica y mejora la concentración. Excelente para agotamiento mental.', best: 'Mejor para: dolor de cabeza, fatiga mental, concentración, náuseas', mainProp: 'Claridad', notes: 'Notas herbáceas dulces con fondo especiado y anisado' },
  'mirra':           { name: 'Mirra',          icon: '✨', props: ['Espiritual', 'Cicatrizante', 'Protector'],            desc: 'La mirra es aceite sagrado usado desde el antiguo Egipto. Potente cicatrizante, antiinflamatorio y protector energético. Favorece la meditación y la introspección profunda.', best: 'Mejor para: rituales, meditación, heridas, protección espiritual', mainProp: 'Protección', notes: 'Notas resinosas amargas con fondo ahumado y terroso' },
  'hierbabuena':     { name: 'Hierbabuena',    icon: '🍃', props: ['Frescurente', 'Digestivo', 'Energizante'],           desc: 'La hierbabuena es más suave que la menta pimienta pero igualmente refrescante. Alivia náuseas, mejora la digestión y despierta los sentidos. Ideal para niños mayores.', best: 'Mejor para: náuseas, digestión, refrescar, dolor de cabeza leve', mainProp: 'Frescura', notes: 'Notas mentoladas dulces con fondo verde y herbáceo' },
  'vetiver':         { name: 'Vetiver',        icon: '🌿', props: ['Calma profunda', 'Grounding', 'Enraizador'],        desc: 'El vetiver es el aceite del enraizamiento. Su aroma terroso y profundo calma la mente hiperactiva, reduce la ansiedad severa y favorece el sueño. Muy usado en perfumería de lujo.', best: 'Mejor para: ansiedad severa, insomnio, grounding, trauma emocional', mainProp: 'Enraizamiento', notes: 'Notas terrosas húmedas con fondo amaderado y ahumado' },
  'benjoin':         { name: 'Benjuí',         icon: '✨', props: ['Caliente', 'Protector', 'Calmante'],                 desc: 'El benjuí calma la ansiedad y crea una sensación de protección. Su aroma vainilla-cálido es reconfortante. Usado como fijador en perfumería y en rituales de protección del hogar.', best: 'Mejor para: protección del hogar, invierno, calma, meditación cálida', mainProp: 'Protección', notes: 'Notas resinosas dulces con fondo vainilla y balsámico' },
  'tuberose':        { name: 'Tuberosa',       icon: '🌸', props: ['Afrodisíaco', 'Relajante', 'Exótico'],               desc: 'La tuberosa es una de las flores más sensuales. Su aroma exótico y narcótico reduce inhibiciones, promueve la intimidad y calma profundamente. Muy costosa, usar en velas de calidad.', best: 'Mejor para: noches románticas, sensualidad, lujo, meditación', mainProp: 'Sensual', notes: 'Notas florales narcóticas con fondo cremoso y animal' },
  'neroli':          { name: 'Neroli',         icon: '🌸', props: ['Regenerador', 'Antidepresivo', 'Calma'],             desc: 'El neroli (azahar) regenera el sistema nervioso. Reduce ataques de pánico, calma la ansiedad profunda y favorece el sueño reparador. Uno de los aceites más caros y terapéuticos.', best: 'Mejor para: pánico, insomnio, shock emocional, piel madura', mainProp: 'Regenerador', notes: 'Notas florales verdes con fondo miel y cítrico' },
  'palo santo':      { name: 'Palo Santo',     icon: '✨', props: ['Purificante', 'Espiritual', 'Elevador'],             desc: 'El palo santo es madera sagrada sudamericana. Purifica energías, eleva la vibración del espacio y favorece la creatividad. Su aroma dulce y místico es único e inconfundible.', best: 'Mejor para: limpieza energética, creatividad, meditación, ritual', mainProp: 'Purificación', notes: 'Notas maderadas dulces con fondo mentolado y cítrico' },
  'cardamomo':       { name: 'Cardamomo',      icon: '🟤', props: ['Digestivo', 'Estimulante', 'Aphrodisíaco'],         desc: 'El cardamomo estimula la digestión y el apetito. Su aroma especiado y exótico es afrodisíaco y energizante. Mejora la circulación y calienta el cuerpo y la mente.', best: 'Mejor para: digestión, estimulación, romanticismo, invierno', mainProp: 'Estimulante', notes: 'Notas especiadas frescas con fondo dulce y alcanforado' },
  'jengibre':        { name: 'Jengibre',       icon: '🟤', props: ['Caliente', 'Estimulante', 'Analgesico'],             desc: 'El jengibre calienta, estimula la circulación y alivia dolores musculares y articulares. Combaten náuseas y fatiga. Su aroma especiado es energizante y motivador.', best: 'Mejor para: dolor muscular, náuseas, frío, fatiga, circulación', mainProp: 'Calentador', notes: 'Notas especiadas picantes con fondo cálido y terroso' },
  'helichrysum':     { name: 'Helichrysum (Siemprevida)', icon: '🌼', props: ['Regenerador', 'Antiinflamatorio', 'Cicatrizante'], desc: 'El helichrysum o inmortelle es el aceite de la regeneración celular. Potente antiinflamatorio, acelera la cicatrización de heridas, hematomas y tejido dañado. También libera traumas emocionales almacenados en el cuerpo.', best: 'Mejor para: cicatrices, hematomas, inflamación, trauma emocional, piel', mainProp: 'Regenerador', notes: 'Notas herbáceas mieladas con fondo especiado y terroso' },
  'manuka':          { name: 'Manuka',         icon: '🌿', props: ['Antibacteriano', 'Calma', 'Sanador'],               desc: 'El manuka es más potente que el árbol de té como antibacteriano. Calma la piel irritada, combate acné y tiene propiedades antihistamínicas. Su aroma dulce y terroso es calmante.', best: 'Mejor para: acné, piel sensible, alergias, infecciones cutáneas', mainProp: 'Sanador', notes: 'Notas herbáceas dulces con fondo terroso y mielado' },
  'copaiba':         { name: 'Copaiba',        icon: '🌿', props: ['Antiinflamatorio', 'Calma', 'Sanador'],             desc: 'La copaiba es rica en beta-cariofileno, un potente antiinflamatorio natural que actúa sobre los receptores CB2 del sistema endocannabinoide. Calma dolor, inflamación y ansiedad sin efectos psicoactivos.', best: 'Mejor para: dolor crónico, inflamación, ansiedad, artritis', mainProp: 'Antiinflamatorio', notes: 'Notas suaves maderadas con fondo dulce y balsámico' },
  'ravintsara':      { name: 'Ravintsara',     icon: '🌲', props: ['Antiviral', 'Inmunoestimulante', 'Descongestionante'], desc: 'La ravintsara es el aceite antiviral por excelencia. Fortalece el sistema inmune, descongestiona y combate infecciones respiratorias. Seguro para niños y embarazadas en difusión.', best: 'Mejor para: gripes, COVID, defensas bajas, bronquitis, niños', mainProp: 'Antiviral', notes: 'Notas frescas eucaliptadas con fondo alcanforado y limpio' },
  'wintergreen':     { name: 'Wintergreen (Gaulteria)', icon: '🍃', props: ['Analgésico', 'Antiinflamatorio', 'Refrescante'], desc: 'El wintergreen contiene metil salicilato, un potente analgésico y antiinflamatorio. Alivia dolores musculares, articulares y de espalda. Usar solo en baja concentración y no en niños ni embarazadas.', best: 'Mejor para: dolor muscular intenso, deportistas, artritis, masaje', mainProp: 'Analgésico', notes: 'Notas mentoladas dulces con fondo medicinal y analgésico' },

  // === CÍTRICOS ===
  'toronja':         { name: 'Pomelo (Grapefruit)', icon: '🍊', props: ['Energizante', 'Limpificador', 'Antidepresivo'], desc: 'El pomelo eleva el ánimo rápidamente y combate la fatiga mental. Es purificante, reduce la retención de líquidos y es ideal para difundir en la mañana. Su aroma cítrico brillante despierta los sentidos.', best: 'Mejor para: mañanas, dietas, retención de líquidos, oficinas', mainProp: 'Despertar', notes: 'Notas cítricas frescas y brillantes con fondo ligeramente amargo' },
  'lima':            { name: 'Lima',            icon: '🍋', props: ['Purificante', 'Energizante', 'Antiséptico'],          desc: 'La lima es más intensa que el limón, con un aroma agudo y purificante. Desinfecta el aire, eleva la energía del espacio y mejora la concentración. Excelente para cocinas y baños.', best: 'Mejor para: limpieza, purificar, concentración, cocina', mainProp: 'Purificación', notes: 'Notas cítricas agudas y verdes con fondo limpio y ácido' },
  'mandarina':       { name: 'Mandarina',       icon: '🍊', props: ['Relajante', 'Alegre', 'Digestivo'],                  desc: 'La mandarina es el aceite cítrico más suave y dulce. Calma sin sedar, reduce el estrés infantil y favorece la digestión. Su aroma alegre y festivo es perfecto para niños y embarazadas.', best: 'Mejor para: niños, embarazadas, ansiedad leve, digestión, Navidad', mainProp: 'Dulzura', notes: 'Notas cítricas dulces y afrutadas con fondo floral suave' },
  'lemongrass':      { name: 'Lemongrass (Hierba Limón)', icon: '🌿', props: ['Repelente', 'Purificante', 'Energizante'], desc: 'El lemongrass combina aroma cítrico con propiedades insecticidas potentes. Purifica el aire, elimina olores, repela mosquitos y mejora la claridad mental. Muy usado en velas de verano.', best: 'Mejor para: repeler insectos, verano, purificar, eliminar olores', mainProp: 'Frescura cítrica', notes: 'Notas cítricas terrosas con fondo herbáceo y limpio' },

  // === FLORALES ===
  'salvia':          { name: 'Salvia Esclarea', icon: '💜', props: ['Equilibrante hormonal', 'Euforia', 'Calma'],        desc: 'La salvia esclarea regula las hormonas femeninas, alivia síntomas de PMS y menopausia. Su aroma herbal-dulce induce estados de euforia suave y reduce la ansiedad. Evitar con alcohol.', best: 'Mejor para: PMS, menopausia, euforia, equilibrio hormonal', mainProp: 'Hormonal', notes: 'Notas herbáceas dulces con fondo almizclado y ligeramente floral' },
  'palmarosa':       { name: 'Palmarosa',       icon: '🌸', props: ['Hidratante', 'Antiséptico', 'Equilibrante'],        desc: 'La palmarosa es un aceite floral suave con potentes propiedades antimicrobianas. Equilibra la producción de sebo, hidrata la piel y su aroma dulce-rosado calma sin adormecer.', best: 'Mejor para: piel mixta, equilibrio, antimicrobiano suave, difusión diaria', mainProp: 'Equilibrio', notes: 'Notas florales dulces rosadas con fondo cítrico y geranio' },
  'gardenia':        { name: 'Gardenia',        icon: '🤍', props: ['Afrodisíaco', 'Relajante', 'Exótico'],              desc: 'La gardenia tiene uno de los perfumes florales más intensos y exóticos. Es afrodisíaca, reduce la ansiedad y promueve estados de calma profunda. Usar en baja concentración por su potencia.', best: 'Mejor para: romanticismo, lujo, noches especiales, meditación floral', mainProp: 'Exótico', notes: 'Notas florales cremosas intensas con fondo verde y afrutado' },

  // === AMADERADOS ===
  'cipres':          { name: 'Ciprés',          icon: '🌲', props: ['Vasoconstrictor', 'Descongestionante', 'Refrescante'], desc: 'El ciprés reduce la sudoración excesiva, mejora la circulación venosa y descongestiona las vías respiratorias. Su aroma fresco-amaderado es masculino y elegante. Ideal para cambios de estación.', best: 'Mejor para: circulación, sudoración, vías respiratorias, otoño', mainProp: 'Refrescante amaderado', notes: 'Notas amaderadas frescas con fondo balsámico y ligeramente ahumado' },
  'pino':            { name: 'Pino',            icon: '🌲', props: ['Descongestionante', 'Energizante', 'Purificante'],  desc: 'El pino purifica el aire como ningún otro, abre los bronquios y energiza. Evoca bosques y naturaleza. Muy usado en invierno para resfriados y en limpieza del hogar natural.', best: 'Mejor para: resfriados, limpieza del hogar, invierno, bosque', mainProp: 'Forestal', notes: 'Notas balsámicas frescas con fondo resinoso y verde' },
  'abeto':           { name: 'Abeto',           icon: '🌲', props: ['Respiratorio', 'Energizante', 'Descongestionante'],  desc: 'El abeto es más suave que el pino pero igualmente efectivo para el sistema respiratorio. Descongestiona, energiza y crea ambientes de montaña. Ideal para difusores en invierno.', best: 'Mejor para: respiratorio, invierno, niños, ambiente de montaña', mainProp: 'Montaña', notes: 'Notas balsámicas dulces con fondo cítrico y limpio' },
  'cipres azul':     { name: 'Ciprés Azul',     icon: '🌲', props: ['Calma', 'Respiratorio', 'Grounding'],               desc: 'El ciprés azul es calmante y excelente para el sistema respiratorio. Su aroma fresco y amaderado favorece la meditación y el grounding. Más suave que el ciprés común.', best: 'Mejor para: meditación, respiratorio, grounding suave, yoga', mainProp: 'Calma amaderada', notes: 'Notas amaderadas frescas con fondo resinoso y azulado' },

  // === HERBÁCEOS ===
  'tomillo':         { name: 'Tomillo',         icon: '🌿', props: ['Antibacteriano', 'Inmunoestimulante', 'Estimulante'], desc: 'El tomillo es uno de los antibacterianos más potentes. Fortalece el sistema inmune, combate infecciones respiratorias y estimula la circulación. Usar en baja concentración.', best: 'Mejor para: gripes, infecciones, defensas bajas, limpieza', mainProp: 'Antibacteriano', notes: 'Notas herbáceas especiadas con fondo cálido y medicinal' },
  'mejorana':        { name: 'Mejorana',        icon: '🌿', props: ['Calma', 'Digestivo', 'Antiespasmódico'],            desc: 'La mejorana calma el sistema nervioso, alivia espasmos musculares y mejora la digestión. Su aroma cálido y herbáceo induce sueño tranquilo. Más suave que el orégano.', best: 'Mejor para: insomnio, espasmos, digestión, calma nerviosa', mainProp: 'Calma cálida', notes: 'Notas herbáceas cálidas con fondo especiado y dulce' },
  'eneldo':          { name: 'Eneldo',          icon: '🌿', props: ['Digestivo', 'Antiespasmódico', 'Calma'],             desc: 'El eneldo alivia cólicos, espasmos digestivos y náuseas. Su aroma fresco-anisado es calmante y reconfortante. Usado tradicionalmente para problemas estomacales.', best: 'Mejor para: cólicos, digestión, náuseas, espasmos estomacales', mainProp: 'Digestivo', notes: 'Notas frescas anisadas con fondo herbáceo y verde' },

  // === ESPECIADOS ===
  'anis':            { name: 'Anís Estrellado', icon: '⭐', props: ['Digestivo', 'Expectorante', 'Caliente'],             desc: 'El anís estrellado descongestiona vías respiratorias, alivia tos y mejora la digestión. Su aroma dulce-especiado evoca Navidad y hogar. Excelente para mezclas invernales.', best: 'Mejor para: tos, digestión, Navidad, mezclas invernales', mainProp: 'Invernal', notes: 'Notas especiadas dulces anisadas con fondo cálido y festivo' },
  'pimienta negra':  { name: 'Pimienta Negra',  icon: '⚫', props: ['Estimulante', 'Caliente', 'Analgesico'],            desc: 'La pimienta negra estimula la circulación, calienta músculos fríos y alivia dolores articulares. Su aroma especiado y picante energiza y motiva. Excelente para deportistas.', best: 'Mejor para: dolor muscular, circulación, frío, deportistas, motivación', mainProp: 'Estimulante', notes: 'Notas especiadas picantes con fondo cálido y maderado' },
  'nuez moscada':    { name: 'Nuez Moscada',    icon: '🟤', props: ['Estimulante', 'Digestivo', 'Caliente'],             desc: 'La nuez moscada estimula la mente, mejora la concentración y calienta el cuerpo. Su aroma dulce-especiado es reconfortante y afrodisíaco. Usar con moderación.', best: 'Mejor para: concentración, invierno, digestión, estudiar', mainProp: 'Cálido', notes: 'Notas especiadas dulces con fondo maderado y cremoso' },

  // === RESINOSOS ===
  'elemi':           { name: 'Elemi',           icon: '✨', props: ['Regenerador', 'Antiarrugas', 'Espiritual'],         desc: 'El elemi es pariente del incienso, con propiedades regeneradoras celulares excepcionales. Favorece la meditación, rejuvenece la piel y cicatriza heridas. Aroma fresco-resinoso.', best: 'Mejor para: piel madura, cicatrices, meditación, regeneración', mainProp: 'Regenerador', notes: 'Notas resinosas frescas con fondo cítrico y pimienta' },
  'olibanum':        { name: 'Olibanum (Frankincense Serrata)', icon: '✨', props: ['Espiritual', 'Antiinflamatorio', 'Meditación'], desc: 'El olibanum o incienso indio es más terroso que el frankincense común. Profundiza la meditación, reduce inflamación articular y fortalece el sistema inmune. Usado en rituales védicos.', best: 'Mejor para: meditación védica, articulaciones, inmunidad, rituales', mainProp: 'Sagrado védico', notes: 'Notas resinosas terrosas con fondo especiado y ahumado' },

  // === EXÓTICOS ===
  'champaca':        { name: 'Champaca',        icon: '🌸', props: ['Afrodisíaco', 'Calma', 'Exótico'],                 desc: 'La champaca es una flor sagrada asiática con aroma embriagador. Es afrodisíaca, reduce la ansiedad profunda y favorece estados meditativos. Muy apreciada en perfumería de lujo.', best: 'Mejor para: meditación, sensualidad, lujo, conexión espiritual', mainProp: 'Sagrado floral', notes: 'Notas florales exóticas intensas con fondo frutal y té verde' },
  'ylang completa':  { name: 'Ylang Ylang Completo', icon: '🌺', props: ['Afrodisíaco', 'Euforia', 'Equilibrante'],    desc: 'El ylang ylang completo (todas las fracciones destiladas) tiene un perfil más equilibrado que la fracción extra. Equilibra emociones, reduce la presión arterial y promueve la alegría.', best: 'Mejor para: equilibrio emocional, euforia suave, presión arterial', mainProp: 'Equilibrante', notes: 'Notas florales exóticas con fondo frutal, cremoso y especiado' },
  'osmanthus':       { name: 'Osmanthus',       icon: '🌸', props: ['Reconfortante', 'Antidepresivo', 'Exótico'],       desc: 'El osmanthus tiene un aroma único que recuerda al albaricoque y al cuero. Es reconfortante, eleva el ánimo y es muy apreciado en perfumería niche. Un toque de lujo para velas premium.', best: 'Mejor para: lujo, perfumería, ánimo bajo, velas premium', mainProp: 'Lujo', notes: 'Notas florales frutales con fondo cuero y albaricoque' },

  // === MIEL ===
  'miel':            { name: 'Miel',            icon: '🍯', props: ['Reconfortante', 'Nutritivo', 'Cálido'],               desc: 'La esencia de miel aporta un aroma dulce, cálido y envolvente. Evoca hogar, seguridad y bienestar. Nutre la piel, calma la mente y crea ambientes acogedores. Sinergiza perfectamente con vainilla, canela y cítricos.', best: 'Mejor para: hogar, invierno, ansiedad, reconfortar, regalos', mainProp: 'Reconfortante', notes: 'Notas dulces cálidas con fondo floral y caramelo' },
  'honey':           { name: 'Miel',            icon: '🍯', props: ['Reconfortante', 'Nutritivo', 'Cálido'],               desc: 'La esencia de miel aporta un aroma dulce, cálido y envolvente. Evoca hogar, seguridad y bienestar. Nutre la piel, calma la mente y crea ambientes acogedores.', best: 'Mejor para: hogar, invierno, ansiedad, reconfortar, regalos', mainProp: 'Reconfortante', notes: 'Notas dulces cálidas con fondo floral y caramelo' }
};

// Normalize for matching: lowercase, no accents
function normalizeForMatch(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function findOilInDB(inputName) {
  const norm = normalizeForMatch(inputName);
  for (const [key, data] of Object.entries(OILS_DB)) {
    if (normalizeForMatch(key) === norm || normalizeForMatch(data.name) === norm) {
      return data;
    }
  }
  // Partial match
  for (const [key, data] of Object.entries(OILS_DB)) {
    if (normalizeForMatch(key).includes(norm) || norm.includes(normalizeForMatch(key))) {
      return data;
    }
  }
  return null;
}

function getOilSuggestions(partial) {
  if (!partial || partial.length < 2) return [];
  const norm = normalizeForMatch(partial);
  const results = [];
  const seen = new Set();
  for (const [key, data] of Object.entries(OILS_DB)) {
    const nameNorm = normalizeForMatch(data.name);
    const keyNorm = normalizeForMatch(key);
    if ((nameNorm.includes(norm) || keyNorm.includes(norm)) && !seen.has(nameNorm)) {
      seen.add(nameNorm);
      results.push({ key, name: data.name, icon: data.icon });
    }
  }
  return results.slice(0, 8);
}

// ===== CUSTOM SCENTS (localStorage) =====
const CUSTOM_SCENTS_KEY = 'aromart_custom_scents';

function loadCustomScents() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_SCENTS_KEY)) || {};
  } catch { return {}; }
}

function saveCustomScents(scents) {
  localStorage.setItem(CUSTOM_SCENTS_KEY, JSON.stringify(scents));
}

// Merge custom scents into SCENT_DATA at startup
function registerCustomScents() {
  const customs = loadCustomScents();
  Object.entries(customs).forEach(([key, data]) => {
    if (!SCENT_DATA[key]) {
      SCENT_DATA[key] = data;
      addScentButton(key, data, true);
    }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  setupNav();
  setupScrollReveal();
  setupOptions();
  setupColors();
  setupSizes();
  registerCustomScents();
  renderBenefits();
  updatePreview();
  setupModal();
  setupFormula();
  setupAI();
  renderRecipeBook();
  setupViewRecipeModal();
  document.getElementById('generateBtn').addEventListener('click', generateRecipe);
  document.getElementById('printBtn').addEventListener('click', printRecipe);
  document.getElementById('newRecipeBtn').addEventListener('click', resetRecipe);
  document.getElementById('saveRecipeBtn').addEventListener('click', () => {
    saveCurrentRecipe();
    document.getElementById('saveRecipeBtn').textContent = 'Guardada';
    document.getElementById('saveRecipeBtn').disabled = true;
    setTimeout(() => {
      document.getElementById('saveRecipeBtn').textContent = 'Guardar en Recetario';
      document.getElementById('saveRecipeBtn').disabled = false;
    }, 1500);
    document.getElementById('recetario').scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
  const targets = document.querySelectorAll(
    '.config-group, .preview-card, .benefit-card, .recipe__card, .ai-card, .recipebook__card, .section-title, .section-subtitle, .formula__builder, .formula__preview, .formula__card'
  );
  targets.forEach(el => el.classList.add('reveal-target'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100 + 100}%;
      animation-duration:${Math.random()*8+6}s;
      animation-delay:${Math.random()*5}s;
    `;
    container.appendChild(p);
  }
}

// ===== NAV SCROLL =====
function setupNav() {
  window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle('nav--scrolled', window.scrollY > 50);
  });
}

// ===== OPTION BUTTONS =====
function setupOptions() {
  document.querySelectorAll('#waxOptions .config-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#waxOptions .config-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.wax = btn.dataset.wax;
      updatePreview();
    });
  });
  document.querySelectorAll('#scentOptions .config-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('scent-delete')) return;
      const key = btn.dataset.scent;
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        if (!state.scents.includes(key)) state.scents.push(key);
      } else {
        state.scents = state.scents.filter(s => s !== key);
      }
      if (state.scents.length === 0) {
        btn.classList.add('active');
        state.scents = [key];
      }
      state.ratios = null;
      updatePreview();
    });
  });
  document.querySelectorAll('#containerOptions .config-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#containerOptions .config-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.container = btn.dataset.container;
      updatePreview();
    });
  });
}

// ===== COLOR SWATCHES =====
function setupColors() {
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      state.color = swatch.dataset.color;
      updatePreview();
    });
  });
}

// ===== SIZE OPTIONS =====
function setupSizes() {
  document.querySelectorAll('.size-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.size = btn.dataset.size;
      updatePreview();
    });
  });
}

// ===== UPDATE PREVIEW =====
function updatePreview() {
  const wax = document.getElementById('previewWax');
  const container = document.getElementById('previewContainer');

  wax.style.background = state.color;

  // Container class
  container.className = 'preview-candle__container preview-candle__container--' + state.container;

  // Scale based on size
  const scales = { small: 0.8, medium: 1, large: 1.3 };
  container.style.transform = `scale(${scales[state.size]})`;

  // Info
  document.getElementById('infoWax').textContent = WAX_DATA[state.wax].name;
  const scentNames = state.scents.map((s, i) => {
    const name = SCENT_DATA[s] ? SCENT_DATA[s].name : s;
    return state.ratios ? `${name} (${state.ratios[i]}%)` : name;
  }).join(' + ');
  document.getElementById('infoScent').textContent = scentNames;
  document.getElementById('infoScentCount').textContent = state.scents.length > 1 ? (state.ratios ? 'mezcla IA' : `${state.scents.length} aceites`) : '';
  document.getElementById('infoContainer').textContent = CONTAINER_NAMES[state.container];
  document.getElementById('infoSize').textContent = SIZE_NAMES[state.size];
}

// ===== BENEFITS GRID =====
function renderBenefits() {
  const grid = document.getElementById('benefitsGrid');
  grid.innerHTML = '';
  Object.entries(SCENT_DATA).forEach(([key, data]) => {
    const card = document.createElement('div');
    card.className = 'benefit-card';
    const isCustom = key.startsWith('custom_');
    card.innerHTML = `
      <div class="benefit-card__icon">${data.icon}</div>
      <h3 class="benefit-card__name">${data.name}${isCustom ? ' <span style="font-size:0.7rem;color:#D4A574;font-family:Lato,sans-serif">✨ Personalizado</span>' : ''}</h3>
      <div class="benefit-card__props">
        ${data.props.map(p => `<span class="benefit-card__prop">${p}</span>`).join('')}
      </div>
      <p class="benefit-card__desc">${data.desc}</p>
      <p class="benefit-card__best">${data.best}</p>
    `;
    grid.appendChild(card);
  });
}

// ===== GENERATE RECIPE =====
function generateRecipe() {
  const wax = WAX_DATA[state.wax];
  const scents = state.scents.map(s => SCENT_DATA[s]).filter(Boolean);
  const primary = scents[0];
  const size = SIZE_DATA[state.size];
  const grams = size.grams;
  const oilGrams = grams * 0.08;
  const oilMl = Math.round(oilGrams / 0.9 * 10) / 10;
  const totalDrops = Math.round(oilMl * 20);
  const ratios = state.ratios || scents.map(() => Math.round(100 / scents.length));
  const ratioTotal = ratios.reduce((a, b) => a + b, 0);
  const scentDrops = ratios.map(r => Math.round(totalDrops * r / ratioTotal));
  const scentMl = ratios.map(r => Math.round(oilMl * r / ratioTotal * 10) / 10);
  const dyeAmount = state.wax === 'beeswax' ? 'No necesita (color natural)' : (grams < 200 ? '1-2 gotas' : '3-4 gotas');
  const scentNames = scents.map((s, i) => state.ratios ? `${s.name} (${ratios[i]}%)` : s.name).join(' + ');

  document.getElementById('recipeName').textContent = `Vela de ${wax.name} — ${scents.map(s => s.name).join(' + ')}`;
  document.getElementById('recipeBadge').textContent = primary.mainProp;

  // Materials
  const materials = document.getElementById('recipeMaterials');
  const scentLines = scents.map((s, i) =>
    `<li><span>Aceite esencial de ${s.name.toLowerCase()}${state.ratios ? ` (${ratios[i]}%)` : ''}</span><span>${scentDrops[i]} gotas (~${scentMl[i]} ml)</span></li>`
  ).join('');
  materials.innerHTML = `
    <li><span>Cera de ${wax.name.toLowerCase()}</span><span>${grams} g</span></li>
    ${scentLines}
    <li><span>Colorante para velas</span><span>${dyeAmount}</span></li>
    <li><span>Pabilo de algodón o madera</span><span>1 unidad</span></li>
    <li><span>Contenedor: ${CONTAINER_NAMES[state.container].toLowerCase()}</span><span>1 unidad</span></li>
    <li><span>Sujetapabilos</span><span>1-2 unidades</span></li>
  `;

  // Ingredients
  const ingredients = document.getElementById('recipeIngredients');
  const profileLines = scents.map((s, i) => {
    const note = s.notes || 'Perfil aromático personalizado';
    return `<li><span>${s.name}</span><span>${note}</span></li>`;
  }).join('');
  ingredients.innerHTML = `
    ${profileLines}
    <li><span>Temperatura de fusión</span><span>${wax.melt}</span></li>
    <li><span>Temperatura de vertido</span><span>${wax.pour}</span></li>
    <li><span>Carga de fragancia total</span><span>${totalDrops} gotas (~${oilMl} ml · 8% de ${grams}g)</span></li>
    <li><span>Tiempo de curado</span><span>${state.wax === 'soy' ? '1-2 semanas' : state.wax === 'beeswax' ? '3-5 días' : '2-3 días'}</span></li>
  `;

  // Steps
  const steps = document.getElementById('recipeSteps');
  const cureTime = state.wax === 'soy' ? '1-2 semanas' : state.wax === 'beeswax' ? '3-5 días' : '2-3 días';
  const scentStepText = scents.length === 1
    ? `${scentDrops[0]} gotas de aceite esencial de ${scents[0].name.toLowerCase()}`
    : `las gotas de aceite esencial (${scents.map((s, i) => `${scentDrops[i]} gotas de ${s.name.toLowerCase()}${state.ratios ? ` al ${ratios[i]}%` : ''}`).join(', ')})`;
  steps.innerHTML = `
    <li>Prepara tu área de trabajo cubriendo superficies con periódico. Ten todos los materiales listos y el contenedor limpio y seco.</li>
    <li>Pesa ${grams}g de cera de ${wax.name.toLowerCase()} en un recipiente apto para microondas o baño maría.</li>
    <li>Funde la cera a ${wax.melt} removiendo cada 30 segundos. Nunca la dejes desatendida ni supere los 90°C.</li>
    <li>Mientras se funde, prepara el contenedor: sujeta el pabilo en el centro con el sujetapabilos o palillos.</li>
    <li>Retira la cera del fuego y deja enfriar a ${wax.pour}. Añade ${scentStepText}.</li>
    <li>Añade ${dyeAmount === 'No necesita (color natural)' ? 'el color natural de la cera' : dyeAmount + ' de colorante'} y remueve suavemente durante 2 minutos para integrar uniformemente.</li>
    <li>Vierte la cera lentamente en el contenedor manteniendo el pabilo centrado. Deja 1cm libre en la parte superior.</li>
    <li>Deja reposar sin mover durante 24 horas. Si aparece un hundimiento en el centro, realiza un segundo vertido fino para alisar.</li>
    <li>Recorta el pabilo a 0.5-1cm por encima de la cera. Guarda en lugar fresco y oscuro para curar durante ${cureTime}.</li>
    <li>¡Tu vela está lista! En la primera quema, deja que la cera se derrita hasta los bordes (1 hora por cada 2.5cm de diámetro) para evitar túneles.</li>
  `;

  // Tips
  const tipsParts = scents.map(s =>
    `${s.name}: ${s.best.toLowerCase()}`
  ).join('. ');
  document.getElementById('recipeTips').textContent =
    `Beneficios de tu mezcla — ${tipsParts}. ` +
    `Quema la vela en espacios ventilados pero sin corrientes de aire. ` +
    `El aroma se intensifica cuando la piscina de cera se extiende completamente. ` +
    `Nunca dejes una vela encendida sin supervisión y mantenla alejada de materiales inflamables.`;

  document.getElementById('recipeContent').style.display = 'none';
  document.getElementById('recipeCard').classList.remove('hidden');
}

// ===== PRINT RECIPE =====
function printRecipe() {
  window.print();
}

// ===== RESET =====
function resetRecipe() {
  document.getElementById('recipeCard').classList.add('hidden');
  document.getElementById('recipeContent').style.display = 'block';
}

// ===== RECIPE BOOK (localStorage) =====
const RECIPEBOOK_KEY = 'aromart_recipebook';

function loadRecipeBook() {
  try { return JSON.parse(localStorage.getItem(RECIPEBOOK_KEY)) || []; }
  catch { return []; }
}

function saveRecipeBook(book) {
  localStorage.setItem(RECIPEBOOK_KEY, JSON.stringify(book));
}

function saveCurrentRecipe() {
  const wax = WAX_DATA[state.wax];
  const scents = state.scents.map(s => SCENT_DATA[s]).filter(Boolean);
  const primary = scents[0];
  const size = SIZE_DATA[state.size];
  const grams = size.grams;
  const oilGrams = grams * 0.08;
  const oilMl = Math.round(oilGrams / 0.9 * 10) / 10;
  const totalDrops = Math.round(oilMl * 20);
  const ratios = state.ratios || scents.map(() => Math.round(100 / scents.length));
  const ratioTotal = ratios.reduce((a, b) => a + b, 0);
  const scentDrops = ratios.map(r => Math.round(totalDrops * r / ratioTotal));
  const scentMl = ratios.map(r => Math.round(oilMl * r / ratioTotal * 10) / 10);
  const scentNames = scents.map(s => s.name).join(' + ');

  const recipe = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    name: `Vela de ${wax.name} — ${scentNames}`,
    badge: primary.mainProp,
    config: {
      wax: state.wax,
      waxName: wax.name,
      scents: state.scents.slice(),
      ratios: state.ratios ? state.ratios.slice() : null,
      scentNames,
      color: state.color,
      container: state.container,
      containerName: CONTAINER_NAMES[state.container],
      size: state.size,
      sizeName: SIZE_NAMES[state.size],
      grams
    },
    materials: [
      { label: `Cera de ${wax.name.toLowerCase()}`, value: `${grams} g` },
      ...scents.map((s, i) => ({
        label: `Aceite esencial de ${s.name.toLowerCase()}${state.ratios ? ` (${ratios[i]}%)` : ''}`,
        value: `${scentDrops[i]} gotas (~${scentMl[i]} ml)`
      })),
      { label: 'Colorante para velas', value: state.wax === 'beeswax' ? 'No necesita' : (grams < 200 ? '1-2 gotas' : '3-4 gotas') },
      { label: 'Pabilo', value: '1 unidad' },
      { label: `Contenedor: ${CONTAINER_NAMES[state.container].toLowerCase()}`, value: '1 unidad' }
    ],
    tips: document.getElementById('recipeTips').textContent
  };

  const book = loadRecipeBook();
  book.unshift(recipe);
  saveRecipeBook(book);
  renderRecipeBook();
}

function deleteRecipe(id) {
  const book = loadRecipeBook().filter(r => r.id !== id);
  saveRecipeBook(book);
  renderRecipeBook();
}

function viewRecipe(id) {
  const recipe = loadRecipeBook().find(r => r.id === id);
  if (!recipe) return;

  document.getElementById('viewRecipeTitle').textContent = recipe.name;

  const wax = WAX_DATA[recipe.config.wax];
  const scents = recipe.config.scents.map(s => SCENT_DATA[s]).filter(Boolean);
  const savedRatios = recipe.config.ratios;
  const grams = recipe.config.grams;
  const oilGrams = grams * 0.08;
  const oilMl = Math.round(oilGrams / 0.9 * 10) / 10;
  const totalDrops = Math.round(oilMl * 20);
  const ratios = savedRatios || scents.map(() => Math.round(100 / scents.length));
  const ratioTotal = ratios.reduce((a, b) => a + b, 0);
  const scentDrops = ratios.map(r => Math.round(totalDrops * r / ratioTotal));
  const scentMl = ratios.map(r => Math.round(oilMl * r / ratioTotal * 10) / 10);
  const dyeAmount = recipe.config.wax === 'beeswax' ? 'No necesita' : (grams < 200 ? '1-2 gotas' : '3-4 gotas');
  const cureTime = recipe.config.wax === 'soy' ? '1-2 semanas' : recipe.config.wax === 'beeswax' ? '3-5 días' : '2-3 días';
  const scentStepText = scents.length === 1
    ? `${scentDrops[0]} gotas de aceite esencial de ${scents[0].name.toLowerCase()}`
    : `las gotas de aceite esencial (${scents.map((s, i) => `${scentDrops[i]} gotas de ${s.name.toLowerCase()}${savedRatios ? ` al ${ratios[i]}%` : ''}`).join(', ')})`;

  document.getElementById('viewRecipeBody').innerHTML = `
    <div class="view-recipe__meta">
      <span class="view-recipe__tag">${recipe.badge}</span>
      <span class="view-recipe__tag">${recipe.config.waxName}</span>
      <span class="view-recipe__tag">${recipe.config.containerName}</span>
      <span class="view-recipe__tag">${recipe.config.sizeName} (${grams}g)</span>
      <span class="view-recipe__tag"><span class="view-recipe-color" style="background:${recipe.config.color}"></span>Color</span>
      <span class="view-recipe__tag">${recipe.date}</span>
    </div>
    <div class="recipe__sections">
      <div>
        <h4>Materiales</h4>
        <ul class="recipe__list">
          ${recipe.materials.map(m => `<li><span>${m.label}</span><span>${m.value}</span></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4>Perfiles Aromáticos</h4>
        <ul class="recipe__list">
          ${scents.map((s, i) => `<li><span>${s.name}${savedRatios ? ` (${ratios[i]}%)` : ''}</span><span>${s.notes || 'Perfil personalizado'} · ${scentDrops[i]} gotas (~${scentMl[i]} ml)</span></li>`).join('')}
          <li><span>Temperatura de fusión</span><span>${wax.melt}</span></li>
          <li><span>Temperatura de vertido</span><span>${wax.pour}</span></li>
          <li><span>Carga de fragancia total</span><span>${totalDrops} gotas (~${oilMl} ml · 8% de ${grams}g)</span></li>
          <li><span>Tiempo de curado</span><span>${cureTime}</span></li>
        </ul>
      </div>
      <div>
        <h4>Instrucciones</h4>
        <ol class="recipe__steps">
          <li>Prepara tu área de trabajo con todos los materiales listos.</li>
          <li>Pesa ${grams}g de cera de ${wax.name.toLowerCase()}.</li>
          <li>Funde la cera a ${wax.melt} removiendo cada 30 segundos.</li>
          <li>Prepara el contenedor: sujeta el pabilo en el centro.</li>
          <li>Enfría a ${wax.pour}. Añade ${scentStepText}.</li>
          <li>Añade ${dyeAmount} y remueve 2 minutos.</li>
          <li>Vierte lentamente manteniendo el pabilo centrado.</li>
          <li>Reposo 24h sin mover. Segundo vertido si hay hundimiento.</li>
          <li>Recorta pabilo a 0.5-1cm. Cura ${cureTime}.</li>
          <li>Primera quema: cera derretida hasta los bordes (1h/2.5cm).</li>
        </ol>
      </div>
      <div>
        <h4>Consejos Terapéuticos</h4>
        <p class="recipe__tips">${recipe.tips}</p>
      </div>
    </div>
  `;

  document.getElementById('viewRecipeOverlay').classList.remove('hidden');
}

function renderRecipeBook() {
  const book = loadRecipeBook();
  const grid = document.getElementById('recipebookGrid');
  const empty = document.getElementById('recipebookEmpty');

  if (book.length === 0) {
    empty.style.display = 'block';
    grid.innerHTML = '';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = book.map(r => `
    <div class="recipebook__card" data-id="${r.id}">
      <div class="recipebook__card-header">
        <span class="recipebook__card-name">${escapeHTML(r.name)}</span>
        <span class="recipebook__card-badge">${r.badge}</span>
      </div>
      <div class="recipebook__card-body">
        <div class="recipebook__card-detail"><span>Cera</span><span>${r.config.waxName}</span></div>
        <div class="recipebook__card-detail"><span>Aromas</span><span>${escapeHTML(r.config.scentNames)}</span></div>
        <div class="recipebook__card-detail"><span>Contenedor</span><span>${r.config.containerName}</span></div>
        <div class="recipebook__card-detail"><span>Tamaño</span><span>${r.config.sizeName} (${r.config.grams}g)</span></div>
      </div>
      <div class="recipebook__card-date">${r.date}</div>
      <div class="recipebook__card-actions">
        <button class="btn btn--primary btn--sm view-recipe-btn" data-id="${r.id}">Ver Receta</button>
        <button class="btn btn--secondary btn--sm reuse-recipe-btn" data-id="${r.id}">Reutilizar</button>
        <button class="recipebook__card-delete delete-recipe-btn" data-id="${r.id}">Eliminar</button>
      </div>
    </div>
  `).join('');

  // Attach events
  grid.querySelectorAll('.view-recipe-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); viewRecipe(btn.dataset.id); });
  });
  grid.querySelectorAll('.reuse-recipe-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); reuseRecipe(btn.dataset.id); });
  });
  grid.querySelectorAll('.delete-recipe-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Eliminar esta receta del recetario?')) deleteRecipe(btn.dataset.id);
    });
  });
}

function reuseRecipe(id) {
  const recipe = loadRecipeBook().find(r => r.id === id);
  if (!recipe) return;

  state.wax = recipe.config.wax;
  state.scents = recipe.config.scents.slice();
  state.ratios = recipe.config.ratios ? recipe.config.ratios.slice() : null;
  state.color = recipe.config.color;
  state.container = recipe.config.container;
  state.size = recipe.config.size;

  // Sync UI
  document.querySelectorAll('#waxOptions .config-option').forEach(b => b.classList.remove('active'));
  const waxBtn = document.querySelector(`[data-wax="${state.wax}"]`);
  if (waxBtn) waxBtn.classList.add('active');

  document.querySelectorAll('#scentOptions .config-option').forEach(b => b.classList.remove('active'));
  state.scents.forEach(sk => {
    const btn = document.querySelector(`[data-scent="${sk}"]`);
    if (btn) btn.classList.add('active');
  });

  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  const swatch = document.querySelector(`.color-swatch[data-color="${state.color}"]`);
  if (swatch) swatch.classList.add('active');

  document.querySelectorAll('#containerOptions .config-option').forEach(b => b.classList.remove('active'));
  const ctnBtn = document.querySelector(`[data-container="${state.container}"]`);
  if (ctnBtn) ctnBtn.classList.add('active');

  document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
  const szBtn = document.querySelector(`[data-size="${state.size}"]`);
  if (szBtn) szBtn.classList.add('active');

  updatePreview();
  document.getElementById('configurador').scrollIntoView({ behavior: 'smooth' });
}

// ===== ADD SCENT BUTTON DYNAMICALLY =====
function addScentButton(key, data, isCustom) {
  const grid = document.getElementById('scentOptions');
  const btn = document.createElement('button');
  btn.className = 'config-option';
  btn.dataset.scent = key;
  if (isCustom) btn.dataset.custom = 'true';
  btn.dataset.tooltip = data.props.join(', ');
  btn.innerHTML = `
    <span class="config-option__icon">${data.icon || '🧪'}</span>
    <span class="config-option__label">${data.name}</span>
    ${isCustom ? '<button class="scent-delete" title="Eliminar">&times;</button>' : ''}
  `;
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('scent-delete')) return;
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
      if (!state.scents.includes(key)) state.scents.push(key);
    } else {
      state.scents = state.scents.filter(s => s !== key);
    }
    if (state.scents.length === 0) {
      btn.classList.add('active');
      state.scents = [key];
    }
    state.ratios = null;
    updatePreview();
  });
  if (isCustom) {
    btn.querySelector('.scent-delete').addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Eliminar "${data.name}" de tus aceites?`)) {
        delete SCENT_DATA[key];
        const customs = loadCustomScents();
        delete customs[key];
        saveCustomScents(customs);
        btn.remove();
        state.scents = state.scents.filter(s => s !== key);
        if (state.scents.length === 0) {
          state.scents = ['lavender'];
          document.querySelector('[data-scent="lavender"]').classList.add('active');
        }
        updatePreview();
        renderBenefits();
      }
    });
  }
  grid.appendChild(btn);
}

// ===== AI SECTION =====
function setupAI() {
  // Blend generator
  const blendBtn = document.getElementById('aiBlendBtn');
  const blendInput = document.getElementById('aiBlendInput');
  blendBtn.addEventListener('click', () => {
    const val = blendInput.value.trim();
    if (!val) return;
    const blend = AI.generateBlend(val);
    renderBlend(blend, val);
  });
  blendInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); blendBtn.click(); }
  });

  // Chat
  const chatSend = document.getElementById('aiChatSend');
  const chatInput = document.getElementById('aiChatInput');
  chatSend.addEventListener('click', sendChat);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); sendChat(); }
  });
}

function formatAIText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

function renderBlend(blend) {
  const el = document.getElementById('aiBlendResult');
  el.classList.remove('hidden');

  const colors = ['#D4A574', '#B8A9C9', '#A8D5BA', '#F4C2C2', '#F0E68C'];
  const barHtml = blend.details.map((d, i) =>
    `<div class="ai-result__blend-segment" style="width:${d.ratio}%;background:${colors[i % colors.length]}">${d.ratio}%</div>`
  ).join('');

  const infoHtml = blend.details.map((d, i) =>
    `<span class="ai-result__blend-item">${d.icon} ${d.name} (${d.ratio}%)</span>`
  ).join('');

  el.innerHTML = `
    <div class="ai-result__title">Mezcla: ${blend.name}</div>
    <div class="ai-result__blend-bar">${barHtml}</div>
    <div class="ai-result__blend-info">${infoHtml}</div>
    <p class="ai-result__reason">${blend.tips}</p>
    <p><strong>Cera recomendada:</strong> ${WAX_DATA[blend.wax].name}</p>
    <div class="ai-result__action"></div>
  `;
  const actionDiv = el.querySelector('.ai-result__action');
  const applyBtn = document.createElement('button');
  applyBtn.className = 'btn btn--primary';
  applyBtn.textContent = 'Aplicar al Configurador';
  applyBtn.addEventListener('click', () => {
    AI.applyBlend(blend);
    document.getElementById('configurador').scrollIntoView({ behavior: 'smooth' });
  });
  actionDiv.appendChild(applyBtn);
}

function sendChat() {
  const input = document.getElementById('aiChatInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';

  const messages = document.getElementById('aiChatMessages');

  // User message
  const userDiv = document.createElement('div');
  userDiv.className = 'ai-msg ai-msg--user';
  userDiv.innerHTML = `
    <span class="ai-msg__avatar">👤</span>
    <div class="ai-msg__bubble">${escapeHTML(msg)}</div>
  `;
  messages.appendChild(userDiv);

  // Typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg ai-msg--ai';
  typingDiv.innerHTML = `
    <span class="ai-msg__avatar">🤖</span>
    <div class="ai-typing">
      <span class="ai-typing__dot"></span>
      <span class="ai-typing__dot"></span>
      <span class="ai-typing__dot"></span>
    </div>
  `;
  messages.appendChild(typingDiv);
  messages.scrollTop = messages.scrollHeight;

  // Simulate thinking delay
  setTimeout(() => {
    typingDiv.remove();
    const answer = AI.chat(msg);
    const aiDiv = document.createElement('div');
    aiDiv.className = 'ai-msg ai-msg--ai';
    aiDiv.innerHTML = `
      <span class="ai-msg__avatar">🤖</span>
      <div class="ai-msg__bubble">${formatAIText(answer)}</div>
    `;
    messages.appendChild(aiDiv);
    messages.scrollTop = messages.scrollHeight;
  }, 600 + Math.random() * 800);
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== VIEW RECIPE MODAL =====
function setupViewRecipeModal() {
  const overlay = document.getElementById('viewRecipeOverlay');
  document.getElementById('viewRecipeClose').addEventListener('click', () => {
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });
}

// ===== MODAL LOGIC =====
function setupModal() {
  const overlay = document.getElementById('modalOverlay');
  const form = document.getElementById('scentForm');
  const nameInput = document.getElementById('scentName');
  const suggestionsEl = document.getElementById('scentSuggestions');
  const autoHint = document.getElementById('scentAutoHint');

  document.getElementById('addScentBtn').addEventListener('click', () => {
    overlay.classList.remove('hidden');
    nameInput.focus();
  });

  // Research button
  const researchBtn = document.getElementById('researchBtn');
  researchBtn.addEventListener('click', () => {
    const val = nameInput.value.trim();
    if (val.length >= 2) {
      autoResearchScent(val);
    }
  });

  function closeModal() {
    overlay.classList.add('hidden');
    form.reset();
    suggestionsEl.classList.add('hidden');
    autoHint.textContent = '';
    autoHint.classList.remove('auto-filled');
    autoHint.classList.remove('researching');
  }

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Auto-fill when user types a known oil name
  let researchTimeout = null;
  nameInput.addEventListener('input', () => {
    const val = nameInput.value.trim();
    const suggestions = getOilSuggestions(val);

    if (suggestions.length > 0 && val.length >= 2) {
      suggestionsEl.innerHTML = suggestions.map(s =>
        `<div class="scent-suggestion" data-name="${s.name}">
          <span class="scent-suggestion__icon">${s.icon}</span>
          <span class="scent-suggestion__name">${s.name}</span>
        </div>`
      ).join('');
      suggestionsEl.classList.remove('hidden');

      suggestionsEl.querySelectorAll('.scent-suggestion').forEach(el => {
        el.addEventListener('click', () => {
          const selectedName = el.dataset.name;
          nameInput.value = selectedName;
          suggestionsEl.classList.add('hidden');
          autoFillFromDB(selectedName);
        });
      });
    } else {
      suggestionsEl.classList.add('hidden');
    }

    // Try auto-fill on full match
    const match = findOilInDB(val);
    if (match && normalizeForMatch(val) === normalizeForMatch(match.name)) {
      autoFillFromDB(match.name);
    } else if (val.length >= 3 && !match) {
      // Auto-research: generate characteristics for unknown scents
      clearTimeout(researchTimeout);
      researchTimeout = setTimeout(() => {
        autoResearchScent(val);
      }, 800);
    }
  });

  // Hide suggestions on blur (with delay for click)
  nameInput.addEventListener('blur', () => {
    setTimeout(() => suggestionsEl.classList.add('hidden'), 200);
  });

  function autoFillFromDB(oilName) {
    const oil = findOilInDB(oilName);
    if (!oil) return;

    document.getElementById('scentIcon').value = oil.icon;
    document.getElementById('scentDesc').value = oil.desc;
    document.getElementById('scentProps').value = oil.props.join(', ');
    document.getElementById('scentMainProp').value = oil.mainProp;
    document.getElementById('scentBest').value = oil.best;
    document.getElementById('scentNotes').value = oil.notes;

    autoHint.textContent = 'Relleno automático desde la base de conocimiento';
    autoHint.classList.add('auto-filled');
  }

  // === AUTO-RESEARCH ENGINE ===
  function autoResearchScent(scentName) {
    autoHint.textContent = 'Investigando características...';
    autoHint.classList.remove('auto-filled');
    autoHint.classList.add('researching');
    researchBtn.disabled = true;
    researchBtn.textContent = '⏳ Investigando...';

    // Simulate research delay for UX
    setTimeout(() => {
      const data = generateScentData(scentName);
      if (data) {
        document.getElementById('scentIcon').value = data.icon;
        document.getElementById('scentDesc').value = data.desc;
        document.getElementById('scentProps').value = data.props.join(', ');
        document.getElementById('scentMainProp').value = data.mainProp;
        document.getElementById('scentBest').value = data.best;
        document.getElementById('scentNotes').value = data.notes;

        autoHint.textContent = 'Características generadas automáticamente - revisa y ajusta si es necesario';
        autoHint.classList.remove('researching');
        autoHint.classList.add('auto-filled');
        researchBtn.disabled = false;
        researchBtn.textContent = '🔍 Investigar';
      }
    }, 600);
  }

  // === SCENT DATA GENERATOR ===
  function generateScentData(name) {
    const norm = normalizeForMatch(name);

    // Comprehensive scent knowledge base for auto-generation
    const SCENT_PATTERNS = {
      // Flores
      'rosa': { icon: '🌹', category: 'floral', props: ['Afrodisíaco', 'Armonizante', 'Calmante'], mainProp: 'Armonizante', base: 'Notas florales dulces' },
      'lavanda': { icon: '💜', category: 'floral', props: ['Relajante', 'Anti-insomnio', 'Ansiolítico'], mainProp: 'Relajante', base: 'Notas florales herbáceas' },
      'jazmin': { icon: '🌸', category: 'floral', props: ['Antidepresivo', 'Confianza', 'Romántico'], mainProp: 'Elevador', base: 'Notas florales exóticas' },
      'ylang': { icon: '🌺', category: 'floral', props: ['Euforia suave', 'Hipotensor', 'Sensual'], mainProp: 'Euforizante', base: 'Notas florales intensas' },
      'geranio': { icon: '🌸', category: 'floral', props: ['Equilibrante', 'Hormonal', 'Regenerador'], mainProp: 'Equilibrante', base: 'Notas florales rosadas' },
      'gardenia': { icon: '🤍', category: 'floral', props: ['Afrodisíaco', 'Relajante', 'Exótico'], mainProp: 'Exótico', base: 'Notas florales cremosas' },
      'magnolia': { icon: '🌸', category: 'floral', props: ['Calma', 'Dulce', 'Elegante'], mainProp: 'Elegante', base: 'Notas florales cítricas' },
      'peonia': { icon: '🌸', category: 'floral', props: ['Romántico', 'Suave', 'Fresco'], mainProp: 'Romántico', base: 'Notas florales verdes' },
      'fresia': { icon: '🌸', category: 'floral', props: ['Alegre', 'Fresco', 'Limpio'], mainProp: 'Alegre', base: 'Notas florales verdes' },
      'lila': { icon: '💜', category: 'floral', props: ['Primaveral', 'Nostálgico', 'Suave'], mainProp: 'Primaveral', base: 'Notas florales verdes' },
      'violeta': { icon: '💜', category: 'floral', props: ['Misterioso', 'Elegante', 'Romántico'], mainProp: 'Elegante', base: 'Notas florales verdes' },
      'orquidea': { icon: '🌸', category: 'floral', props: ['Exótico', 'Sensual', 'Sofisticado'], mainProp: 'Exótico', base: 'Notas florales cremosas' },
      'loto': { icon: '🪷', category: 'floral', props: ['Espiritual', 'Calma', 'Purificador'], mainProp: 'Espiritual', base: 'Notas florales acuáticas' },
      'azahar': { icon: '🌸', category: 'floral', props: ['Relajante', 'Dulce', 'Bridal'], mainProp: 'Relajante', base: 'Notas florales dulces' },

      // Cítricos
      'limon': { icon: '🍋', category: 'citrico', props: ['Energizante', 'Purificante', 'Concentración'], mainProp: 'Energizante', base: 'Notas cítricas brillantes' },
      'naranja': { icon: '🍊', category: 'citrico', props: ['Alegre', 'Relajante', 'Digestivo'], mainProp: 'Alegría', base: 'Notas cítricas dulces' },
      'mandarina': { icon: '🍊', category: 'citrico', props: ['Relajante', 'Alegre', 'Digestivo'], mainProp: 'Dulzura', base: 'Notas cítricas dulces' },
      'pomelo': { icon: '🍊', category: 'citrico', props: ['Energizante', 'Limpificador', 'Antidepresivo'], mainProp: 'Despertar', base: 'Notas cítricas frescas' },
      'lima': { icon: '🍋', category: 'citrico', props: ['Purificante', 'Energizante', 'Antiséptico'], mainProp: 'Purificación', base: 'Notas cítricas agudas' },
      'bergamota': { icon: '🍋', category: 'citrico', props: ['Antidepresivo', 'Calma', 'Elevador'], mainProp: 'Anti-ansiedad', base: 'Notas cítricas florales' },
      'toronja': { icon: '🍊', category: 'citrico', props: ['Energizante', 'Limpificador', 'Antidepresivo'], mainProp: 'Despertar', base: 'Notas cítricas frescas' },
      'kumquat': { icon: '🍊', category: 'citrico', props: ['Alegre', 'Fresco', 'Estimulante'], mainProp: 'Alegría', base: 'Notas cítricas dulces' },
      'yuzu': { icon: '🍋', category: 'citrico', props: ['Energizante', 'Refrescante', 'Meditativo'], mainProp: 'Claridad', base: 'Notas cítricas verdes' },

      // Amaderados
      'sándalo': { icon: '🪵', category: 'amaderado', props: ['Meditación', 'Enfoque', 'Espiritual'], mainProp: 'Meditativo', base: 'Notas amaderadas cremosas' },
      'cedro': { icon: '🪵', category: 'amaderado', props: ['Calma', 'Purificante', 'Grounding'], mainProp: 'Estabilidad', base: 'Notas amaderadas secas' },
      'pachulí': { icon: '🍃', category: 'amaderado', props: ['Afrodisíaco', 'Estabilizador', 'Grounding'], mainProp: 'Anclaje', base: 'Notas terrosas musgosas' },
      'vetiver': { icon: '🌿', category: 'amaderado', props: ['Calma profunda', 'Grounding', 'Enraizador'], mainProp: 'Enraizamiento', base: 'Notas terrosas húmedas' },
      'ciprés': { icon: '🌲', category: 'amaderado', props: ['Vasoconstrictor', 'Descongestionante', 'Refrescante'], mainProp: 'Refrescante', base: 'Notas amaderadas frescas' },
      'pino': { icon: '🌲', category: 'amaderado', props: ['Descongestionante', 'Energizante', 'Forestal'], mainProp: 'Forestal', base: 'Notas balsámicas frescas' },
      'abeto': { icon: '🌲', category: 'amaderado', props: ['Respiratorio', 'Energizante', 'Descongestionante'], mainProp: 'Montaña', base: 'Notas balsámicas dulces' },
      'sasafras': { icon: '🌿', category: 'amaderado', props: ['Descongestionante', 'Caliente', 'Estimulante'], mainProp: 'Descongestionante', base: 'Notas especiadas dulces' },
      'teca': { icon: '🪵', category: 'amaderado', props: ['Calma', 'Elegante', 'Duradero'], mainProp: 'Elegante', base: 'Notas amaderadas suaves' },
      'roble': { icon: '🪵', category: 'amaderado', props: ['Fortalecedor', 'Masculino', 'Estable'], mainProp: 'Fortaleza', base: 'Notas amaderadas secas' },
      'nogal': { icon: '🪵', category: 'amaderado', props: ['Sofisticado', 'Cálido', 'Terroso'], mainProp: 'Sofisticación', base: 'Notas amaderadas ricas' },

      // Herbáceos
      'romero': { icon: '🌿', category: 'herbaceo', props: ['Estimulante', 'Memoria', 'Antidolor'], mainProp: 'Mental', base: 'Notas herbáceas camforadas' },
      'menta': { icon: '🍃', category: 'herbaceo', props: ['Energizante', 'Analgésico', 'Claridad'], mainProp: 'Vigorizante', base: 'Notas frescas pungentes' },
      'eucalipto': { icon: '🌿', category: 'herbaceo', props: ['Descongestionante', 'Energizante', 'Purificante'], mainProp: 'Energizante', base: 'Notas frescas mentoladas' },
      'manzanilla': { icon: '🌼', category: 'herbaceo', props: ['Calma', 'Sueño', 'Digestivo'], mainProp: 'Tranquilizante', base: 'Notas herbales dulces' },
      'tomillo': { icon: '🌿', category: 'herbaceo', props: ['Antibacteriano', 'Inmunoestimulante', 'Estimulante'], mainProp: 'Antibacteriano', base: 'Notas herbáceas especiadas' },
      'albahaca': { icon: '🌿', category: 'herbaceo', props: ['Estimulante', 'Antiespasmódico', 'Claridad'], mainProp: 'Claridad', base: 'Notas herbáceas dulces' },
      'eneldo': { icon: '🌿', category: 'herbaceo', props: ['Digestivo', 'Antiespasmódico', 'Calma'], mainProp: 'Digestivo', base: 'Notas frescas anisadas' },
      'mejorana': { icon: '🌿', category: 'herbaceo', props: ['Calma', 'Digestivo', 'Antiespasmódico'], mainProp: 'Calma cálida', base: 'Notas herbáceas cálidas' },
      'hierbabuena': { icon: '🍃', category: 'herbaceo', props: ['Frescurente', 'Digestivo', 'Energizante'], mainProp: 'Frescura', base: 'Notas mentoladas dulces' },
      'salvia': { icon: '🌿', category: 'herbaceo', props: ['Equilibrante hormonal', 'Euforia', 'Calma'], mainProp: 'Hormonal', base: 'Notas herbáceas dulces' },
      'cilantro': { icon: '🌿', category: 'herbaceo', props: ['Digestivo', 'Desintoxicante', 'Antiespasmódico'], mainProp: 'Digestivo', base: 'Notas verdes frescas' },
      'lavandin': { icon: '💜', category: 'herbaceo', props: ['Relajante', 'Antiséptico', 'Calmante'], mainProp: 'Relajante', base: 'Notas florales herbáceas' },
      'hisopo': { icon: '🌿', category: 'herbaceo', props: ['Purificante', 'Espiritual', 'Respiratorio'], mainProp: 'Purificación', base: 'Notas herbáceas especiadas' },

      // Especiados
      'canela': { icon: '🟤', category: 'especiado', props: ['Estimulante', 'Circulación', 'Acogedor'], mainProp: 'Estimulante', base: 'Notas especiadas cálidas' },
      'jengibre': { icon: '🟤', category: 'especiado', props: ['Caliente', 'Estimulante', 'Antiinflamatorio'], mainProp: 'Calentador', base: 'Notas especiadas picantes' },
      'clavo': { icon: '🟤', category: 'especiado', props: ['Analgésico', 'Antiséptico', 'Estimulante'], mainProp: 'Analgésico', base: 'Notas especiadas intensas' },
      'nuez moscada': { icon: '🟤', category: 'especiado', props: ['Estimulante', 'Digestivo', 'Caliente'], mainProp: 'Cálido', base: 'Notas especiadas dulces' },
      'anis': { icon: '⭐', category: 'especiado', props: ['Digestivo', 'Expectorante', 'Caliente'], mainProp: 'Invernal', base: 'Notas especiadas dulces' },
      'cardamomo': { icon: '🟤', category: 'especiado', props: ['Digestivo', 'Estimulante', 'Afrodisíaco'], mainProp: 'Estimulante', base: 'Notas especiadas frescas' },
      'pimienta': { icon: '⚫', category: 'especiado', props: ['Estimulante', 'Caliente', 'Analgesico'], mainProp: 'Estimulante', base: 'Notas especiadas picantes' },
      'azafrán': { icon: '🟤', category: 'especiado', props: ['Exótico', 'Estimulante', 'Lujo'], mainProp: 'Exótico', base: 'Notas especiadas ricas' },
      'curcuma': { icon: '🟤', category: 'especiado', props: ['Antiinflamatorio', 'Cálido', 'Terroso'], mainProp: 'Antiinflamatorio', base: 'Notas especiadas terrosas' },
      'vanilla': { icon: '🍦', category: 'especiado', props: ['Reconfortante', 'Antiestrés', 'Alegre'], mainProp: 'Reconfortante', base: 'Notas dulces cálidas' },

      // Resinosos
      'incienso': { icon: '✨', category: 'resinoso', props: ['Espiritual', 'Antiinflamatorio', 'Meditación'], mainProp: 'Sagrado', base: 'Notas resinosas balsámicas' },
      'mirra': { icon: '✨', category: 'resinoso', props: ['Espiritual', 'Cicatrizante', 'Protector'], mainProp: 'Protección', base: 'Notas resinosas amargas' },
      'benjuí': { icon: '✨', category: 'resinoso', props: ['Caliente', 'Protector', 'Calmante'], mainProp: 'Protección', base: 'Notas resinosas dulces' },
      'copal': { icon: '✨', category: 'resinoso', props: ['Purificante', 'Espiritual', 'Elevador'], mainProp: 'Purificación', base: 'Notas resinosas frescas' },
      'olíbano': { icon: '✨', category: 'resinoso', props: ['Espiritual', 'Antiinflamatorio', 'Meditación'], mainProp: 'Sagrado', base: 'Notas resinosas terrosas' },
      'estoraque': { icon: '✨', category: 'resinoso', props: ['Caliente', 'Dulce', 'Fijador'], mainProp: 'Calidez', base: 'Notas resinosas dulces' },
      'galbano': { icon: '✨', category: 'resinoso', props: ['Espiritual', 'Regulador', 'Antiespasmódico'], mainProp: 'Espiritual', base: 'Notas resinosas verdes' },

      // Dulces / Gourmand
      'miel': { icon: '🍯', category: 'dulce', props: ['Reconfortante', 'Nutritivo', 'Cálido'], mainProp: 'Reconfortante', base: 'Notas dulces cálidas' },
      'caramelo': { icon: '🍮', category: 'dulce', props: ['Reconfortante', 'Dulce', 'Acogedor'], mainProp: 'Confort', base: 'Notas dulces tostadas' },
      'chocolate': { icon: '🍫', category: 'dulce', props: ['Afrodisíaco', 'Reconfortante', 'Feliz'], mainProp: 'Placer', base: 'Notas dulces ricas' },
      'coco': { icon: '🥥', category: 'dulce', props: ['Relajante', 'Tropical', 'Suave'], mainProp: 'Tropical', base: 'Notas dulces cremosas' },
      'almendra': { icon: '🥜', category: 'dulce', props: ['Reconfortante', 'Dulce', 'Elegante'], mainProp: 'Elegante', base: 'Notas dulces suaves' },
      'avellana': { icon: '🥜', category: 'dulce', props: ['Reconfortante', 'Cálido', 'Acogedor'], mainProp: 'Confort', base: 'Notas dulces tostadas' },
      'maple': { icon: '🍁', category: 'dulce', props: ['Reconfortante', 'Otoñal', 'Cálido'], mainProp: 'Otoñal', base: 'Notas dulces amaderadas' },
      'azucar': { icon: '🍬', category: 'dulce', props: ['Dulce', 'Alegre', 'Juvenil'], mainProp: 'Dulzura', base: 'Notas dulces limpias' },
      'dulce de leche': { icon: '🍮', category: 'dulce', props: ['Reconfortante', 'Nostálgico', 'Cálido'], mainProp: 'Nostalgia', base: 'Notas dulces cremosas' },

      // Frutales
      'manzana': { icon: '🍎', category: 'frutal', props: ['Fresco', 'Alegre', 'Limpio'], mainProp: 'Frescura', base: 'Notas frutales verdes' },
      'durazno': { icon: '🍑', category: 'frutal', props: ['Dulce', 'Suave', 'Femenino'], mainProp: 'Dulzura', base: 'Notas frutales suaves' },
      'cereza': { icon: '🍒', category: 'frutal', props: ['Dulce', 'Tentador', 'Alegre'], mainProp: 'Tentación', base: 'Notas frutales ricas' },
      'fresa': { icon: '🍓', category: 'frutal', props: ['Dulce', 'Fresco', 'Romántico'], mainProp: 'Romance', base: 'Notas frutales dulces' },
      'mango': { icon: '🥭', category: 'frutal', props: ['Tropical', 'Exótico', 'Alegre'], mainProp: 'Tropical', base: 'Notas frutales exóticas' },
      'maracuya': { icon: '🍊', category: 'frutal', props: ['Exótico', 'Energizante', 'Tropical'], mainProp: 'Exótico', base: 'Notas frutales ácidas' },
      'sandia': { icon: '🍉', category: 'frutal', props: ['Refrescante', 'Veraniego', 'Ligero'], mainProp: 'Verano', base: 'Notas frutales acuáticas' },
      'higo': { icon: '🟤', category: 'frutal', props: ['Sofisticado', 'Dulce', 'Mediterráneo'], mainProp: 'Sofisticación', base: 'Notas frutales verdes' },
      'granada': { icon: '🍎', category: 'frutal', props: ['Exótico', 'Antioxidante', 'Elegante'], mainProp: 'Elegancia', base: 'Notas frutales ricas' },
      'arandano': { icon: '🫐', category: 'frutal', props: ['Fresco', 'Antioxidante', 'Alegre'], mainProp: 'Frescura', base: 'Notas frutales dulces' },

      // Naturales / Terrosos
      'hierba': { icon: '🌿', category: 'natural', props: ['Fresco', 'Natural', 'Limpio'], mainProp: 'Naturalidad', base: 'Notas verdes frescas' },
      'heno': { icon: '🌾', category: 'natural', props: ['Campestre', 'Cálido', 'Nostálgico'], mainProp: 'Campo', base: 'Notas secas cálidas' },
      'paja': { icon: '🌾', category: 'natural', props: ['Rústico', 'Cálido', 'Acogedor'], mainProp: 'Rústico', base: 'Notas secas suaves' },
      'musgo': { icon: '🌿', category: 'natural', props: ['Terroso', 'Húmedo', 'Forestal'], mainProp: 'Forestal', base: 'Notas terrosas húmedas' },
      'tierra': { icon: '🌍', category: 'natural', props: ['Grounding', 'Natural', 'Estabilizador'], mainProp: 'Enraizamiento', base: 'Notas terrosas húmedas' },
      'lluvia': { icon: '🌧️', category: 'natural', props: ['Fresco', 'Limpio', 'Renovador'], mainProp: 'Renovación', base: 'Notas acuáticas frescas' },
      'oceano': { icon: '🌊', category: 'natural', props: ['Fresco', 'Limpio', 'Energizante'], mainProp: 'Frescura', base: 'Notas marinas frescas' },
      'sal': { icon: '🧂', category: 'natural', props: ['Mineral', 'Limpio', 'Purificante'], mainProp: 'Pureza', base: 'Notas minerales limpias' },

      // Exóticos
      'oud': { icon: '🪵', category: 'exotico', props: ['Lujo', 'Misterioso', 'Espiritual'], mainProp: 'Lujo', base: 'Notas amaderadas intensas' },
      'ámbar': { icon: '✨', category: 'exotico', props: ['Cálido', 'Sensual', 'Misterioso'], mainProp: 'Calidez', base: 'Notas resinadas cálidas' },
      'almizcle': { icon: '🤍', category: 'exotico', props: ['Sensual', 'Cálido', 'Fijador'], mainProp: 'Sensualidad', base: 'Notas animales suaves' },
      'azafrán': { icon: '🟤', category: 'exotico', props: ['Exótico', 'Estimulante', 'Lujo'], mainProp: 'Exótico', base: 'Notas especiadas ricas' },
      'agar': { icon: '🪵', category: 'exotico', props: ['Meditativo', 'Lujo', 'Profundo'], mainProp: 'Meditación', base: 'Notas amaderadas ahumadas' },
      'frangipani': { icon: '🌸', category: 'exotico', props: ['Exótico', 'Romántico', 'Tropical'], mainProp: 'Exótico', base: 'Notas florales cremosas' },
      'jazmín estrellado': { icon: '🌸', category: 'exotico', props: ['Exótico', 'Caliente', 'Dulce'], mainProp: 'Exótico', base: 'Notas especiadas dulces' }
    };

    // Find matching pattern
    let match = null;
    let bestScore = 0;

    for (const [key, data] of Object.entries(SCENT_PATTERNS)) {
      const keyNorm = normalizeForMatch(key);
      const nameNorm = normalizeForMatch(name);

      // Exact match
      if (keyNorm === nameNorm) {
        match = data;
        break;
      }

      // Partial match
      if (nameNorm.includes(keyNorm) || keyNorm.includes(nameNorm)) {
        const score = keyNorm.length;
        if (score > bestScore) {
          bestScore = score;
          match = data;
        }
      }
    }

    if (!match) {
      // Default generation based on name analysis
      match = generateFromNameAnalysis(name);
    }

    // Generate full description
    const categoryDescs = {
      'floral': `${name} es una esencia floral con propiedades calmantes y armonizantes. Su aroma delicado favorece la relajación y el equilibrio emocional. Ideal para crear ambientes románticos y tranquilos.`,
      'citrico': `${name} es una esencia cítrica energizante y purificante. Su aroma fresco y brillante despierta los sentidos, mejora la concentración y eleva el ánimo. Perfecta para mañanas y espacios de trabajo.`,
      'amaderado': `${name} es una esencia amaderada con propiedades estabilizadoras y grounding. Su aroma profundo y cálido favorece la meditación y la conexión interior. Ideal para espacios de reflexión.`,
      'herbaceo': `${name} es una esencia herbácea fresca y revitalizante. Su aroma verde y natural purifica el aire y estimula la mente. Excelente para estudiar y concentrarse.`,
      'especiado': `${name} es una esencia especiada cálida y estimulante. Su aroma intenso mejora la circulación y crea ambientes acogedores. Perfecta para tardes frías y celebraciones.`,
      'resinoso': `${name} es una esencia resinada sagrada y meditativa. Su aroma balsámico y profundo favorece la conexión espiritual y la protección energética. Ideal para rituales y meditación.`,
      'dulce': `${name} es una esencia dulce y reconfortante. Su aroma envolvente evoca hogar, seguridad y bienestar. Perfecta para crear ambientes cálidos y acogedores.`,
      'frutal': `${name} es una esencia frutal alegre y fresca. Su aroma jugoso y vibrante eleva el ánimo y crea ambientes festivos. Ideal para momentos de celebración y alegría.`,
      'natural': `${name} es una esencia natural y purificante. Su aroma terroso y limpio conecta con la naturaleza y estabiliza las emociones. Perfecta para grounding y espacios de meditación.`,
      'exotico': `${name} es una esencia exótica y misteriosa. Su aroma único y sofisticado transporta a tierras lejanas y despierta la curiosidad. Ideal para velas de lujo y ocasiones especiales.`
    };

    const categoryBest = {
      'floral': 'Mejor para: relajación, romanticismo, meditación, bienestar emocional',
      'citrico': 'Mejor para: mañanas, estudiar, purificar espacios, energía',
      'amaderado': 'Mejor para: meditación, grounding, reflexión, calma profunda',
      'herbaceo': 'Mejor para: concentración, purificación, frescura, estudio',
      'especiado': 'Mejor para: invierno, concentración, celebraciones, calidez',
      'resinoso': 'Mejor para: meditación, rituales, protección espiritual, sanación',
      'dulce': 'Mejor para: hogar, invierno, reconfortar, momentos especiales',
      'frutal': 'Mejor para: alegría, celebraciones, energía positiva, verano',
      'natural': 'Mejor para: grounding, naturaleza, purificación, conexión tierra',
      'exotico': 'Mejor para: lujo, ocasiones especiales, meditación, sofisticación'
    };

    const categoryNotes = {
      'floral': 'Notas florales suaves con fondo dulce y elegante',
      'citrico': 'Notas cítricas brillantes con fondo fresco y limpio',
      'amaderado': 'Notas amaderadas cálidas con fondo terroso y profundo',
      'herbaceo': 'Notas herbáceas frescas con fondo verde y natural',
      'especiado': 'Notas especiadas cálidas con fondo dulce y envolvente',
      'resinoso': 'Notas resinosas balsámicas con fondo cálido y sagrado',
      'dulce': 'Notas dulces cálidas con fondo cremoso y reconfortante',
      'frutal': 'Notas frutales jugosas con fondo fresco y vibrante',
      'natural': 'Notas terrosas frescas con fondo limpio y natural',
      'exotico': 'Notas exóticas complejas con fondo misterioso y sofisticado'
    };

    return {
      icon: match.icon,
      desc: categoryDescs[match.category],
      props: match.props,
      mainProp: match.mainProp,
      best: categoryBest[match.category],
      notes: categoryNotes[match.category] + ' con toques de ' + match.base.toLowerCase()
    };
  }

  // Generate data from name analysis when no pattern matches
  function generateFromNameAnalysis(name) {
    const norm = normalizeForMatch(name);

    // Analyze name for category clues
    const clues = {
      floral: ['flor', 'rosa', 'lily', 'jasmine', 'violet', 'orchid', 'peony', 'daisy', 'tulip', 'margarita', 'girasol', 'lavender', 'lavanda'],
      citrico: ['limon', 'orange', 'naranja', 'citrus', 'lima', 'pomelo', 'grapefruit', 'mandarina', 'tangerine'],
      amaderado: ['wood', 'madera', 'cedar', 'pino', 'oak', 'roble', 'sandal', 'teak', 'nogal', 'abeto'],
      herbaceo: ['herb', 'hierba', 'mint', 'menta', 'basil', 'albahaca', 'thyme', 'tomillo', 'rosemary', 'romero', 'sage', 'salvia'],
      especiado: ['spice', 'espec', 'canela', 'cinnamon', 'ginger', 'jengibre', 'pepper', 'pimienta', 'clavo', 'clove'],
      dulce: ['sweet', 'dulce', 'honey', 'miel', 'vanilla', 'vainilla', 'caramel', 'sugar', 'azucar', 'chocolate'],
      frutal: ['fruit', 'fruta', 'apple', 'manzana', 'berry', 'baya', 'peach', 'durazno', 'cherry', 'cereza'],
      natural: ['nature', 'naturaleza', 'earth', 'tierra', 'rain', 'lluvia', 'ocean', 'oceano', 'forest', 'bosque'],
      exotico: ['exotic', 'exotico', 'oriental', 'arab', 'tropical', 'island']
    };

    for (const [category, keywords] of Object.entries(clues)) {
      for (const kw of keywords) {
        if (norm.includes(kw)) {
          return {
            icon: category === 'floral' ? '🌸' :
                  category === 'citrico' ? '🍋' :
                  category === 'amaderado' ? '🪵' :
                  category === 'herbaceo' ? '🌿' :
                  category === 'especiado' ? '🟤' :
                  category === 'dulce' ? '🍯' :
                  category === 'frutal' ? '🍎' :
                  category === 'natural' ? '🌿' :
                  category === 'exotico' ? '✨' : '🧪',
            category
          };
        }
      }
    }

    // Default: generic herbal
    return { icon: '🌿', category: 'herbaceo' };
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('scentName').value.trim();
    const icon = document.getElementById('scentIcon').value.trim() || '🧪';
    const desc = document.getElementById('scentDesc').value.trim();
    const propsRaw = document.getElementById('scentProps').value.trim();
    const mainProp = document.getElementById('scentMainProp').value.trim() || propsRaw.split(',')[0].trim();
    const best = document.getElementById('scentBest').value.trim() || 'Mejor para: uso general';
    const notes = document.getElementById('scentNotes').value.trim() || 'Perfil aromático personalizado';

    const props = propsRaw.split(',').map(p => p.trim()).filter(Boolean);
    const key = 'custom_' + name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');

    if (SCENT_DATA[key]) {
      alert('Ya existe un aceite con ese nombre.');
      return;
    }

    const newData = { name, icon, intensity: 5, props, desc, best, mainProp, notes };
    SCENT_DATA[key] = newData;

    // Persist
    const customs = loadCustomScents();
    customs[key] = newData;
    saveCustomScents(customs);

    // Add button to UI
    addScentButton(key, newData, true);

    // Refresh benefits grid
    renderBenefits();

    closeModal();

    // Auto-select the new scent (add to selection)
    document.querySelector(`[data-scent="${key}"]`).classList.add('active');
    if (!state.scents.includes(key)) state.scents.push(key);
    updatePreview();
  });
}

// ===== FORMULA CREATOR =====
const FORMULA_COLORS = ['#D4A574','#B8A9C9','#A8D5BA','#F4C2C2','#F0E68C','#87CEEB','#DDA0DD','#98D8C8','#F7DC6F','#E59866','#AED6F1','#D5F5E3'];

const formulaState = {
  oils: [],        // [{key, pct}]
  oilLoad: 8,
  grams: 250,
  wax: 'soy'
};

function setupFormula() {
  populateFormulaOilSelect();
  setupFormulaWaxBtns();
  setupFormulaEvents();
}

function populateFormulaOilSelect() {
  const sel = document.getElementById('formulaOilSelect');
  sel.innerHTML = '<option value="">+ Agregar aceite...</option>';
  const added = new Set();
  const allOils = [];
  Object.entries(SCENT_DATA).forEach(([key, data]) => {
    const norm = data.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (!added.has(norm)) {
      added.add(norm);
      allOils.push({ key, name: data.name, icon: data.icon });
    }
  });
  Object.entries(OILS_DB).forEach(([key, data]) => {
    const norm = data.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (!added.has(norm)) {
      added.add(norm);
      allOils.push({ key: 'db_' + key, name: data.name, icon: data.icon });
    }
  });
  allOils.sort((a, b) => a.name.localeCompare(b.name, 'es'));
  allOils.forEach(o => {
    const opt = document.createElement('option');
    opt.value = o.key;
    opt.textContent = `${o.icon} ${o.name}`;
    sel.appendChild(opt);
  });
}

function setupFormulaWaxBtns() {
  document.querySelectorAll('#formulaWaxBtns .formula__wax-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#formulaWaxBtns .formula__wax-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      formulaState.wax = btn.dataset.fwax;
      renderFormulaPreview();
    });
  });
}

function setupFormulaEvents() {
  const sel = document.getElementById('formulaOilSelect');
  const gramsInput = document.getElementById('formulaGrams');
  const oilLoadRange = document.getElementById('formulaOilLoad');
  const genBtn = document.getElementById('formulaGenerateBtn');
  const shareBtn = document.getElementById('formulaShareBtn');
  const saveBtn = document.getElementById('formulaSaveBtn');

  sel.addEventListener('change', () => {
    const key = sel.value;
    if (!key) return;
    if (formulaState.oils.find(o => o.key === key)) { sel.value = ''; return; }
    formulaState.oils.push({ key, pct: 0 });
    distributeFormulaEvenly();
    renderFormulaOils();
    renderFormulaPreview();
    sel.value = '';
  });

  gramsInput.addEventListener('input', () => {
    formulaState.grams = Math.max(50, parseInt(gramsInput.value) || 250);
    renderFormulaOils();
    renderFormulaPreview();
  });

  oilLoadRange.addEventListener('input', () => {
    formulaState.oilLoad = parseFloat(oilLoadRange.value);
    document.getElementById('formulaOilLoadVal').textContent = formulaState.oilLoad + '%';
    renderFormulaOils();
    renderFormulaPreview();
  });

  genBtn.addEventListener('click', generateFormulaCard);
  shareBtn.addEventListener('click', shareFormula);
  saveBtn.addEventListener('click', saveFormulaToBook);
}

function distributeFormulaEvenly() {
  const n = formulaState.oils.length;
  if (n === 0) return;
  const each = Math.floor(100 / n);
  formulaState.oils.forEach((o, i) => { o.pct = i === n - 1 ? 100 - each * (n - 1) : each; });
}

function getOilInfo(key) {
  if (SCENT_DATA[key]) return SCENT_DATA[key];
  const dbKey = key.replace('db_', '');
  if (OILS_DB[dbKey]) return OILS_DB[dbKey];
  return null;
}

function renderFormulaOils() {
  const list = document.getElementById('formulaOilsList');
  const totalPct = formulaState.oils.reduce((s, o) => s + o.pct, 0);
  const totalOilGrams = formulaState.grams * (formulaState.oilLoad / 100);

  if (formulaState.oils.length === 0) {
    list.innerHTML = '<div class="formula__oils-empty"><div class="formula__oils-empty-icon">🧪</div><p>Selecciona aceites del menú superior</p></div>';
    document.getElementById('formulaTotalFill').style.width = '0%';
    document.getElementById('formulaTotalFill').className = 'formula__total-fill';
    document.getElementById('formulaTotalPct').textContent = '0%';
    document.getElementById('formulaTotalRemaining').textContent = '(100% restante)';
    return;
  }

  list.innerHTML = formulaState.oils.map((oil, i) => {
    const info = getOilInfo(oil.key);
    const icon = info ? info.icon : '🧪';
    const name = info ? info.name : oil.key;
    const oilGrams = (totalOilGrams * oil.pct / 100);
    return `
      <div class="formula__oil-row">
        <span class="formula__oil-icon">${icon}</span>
        <span class="formula__oil-name">${escapeHTML(name)}</span>
        <div class="formula__oil-slider">
          <input type="range" class="formula__oil-range" min="1" max="100" value="${oil.pct}" data-idx="${i}"
            style="background: linear-gradient(90deg, ${FORMULA_COLORS[i % FORMULA_COLORS.length]} ${oil.pct}%, #EDE4D8 ${oil.pct}%)">
        </div>
        <span class="formula__oil-pct">${oil.pct}%</span>
        <span class="formula__oil-grams">${Math.round(oilGrams * 10) / 10}g</span>
        <button class="formula__oil-remove" data-idx="${i}" title="Eliminar">&times;</button>
      </div>
    `;
  }).join('');

  const fill = document.getElementById('formulaTotalFill');
  fill.style.width = Math.min(totalPct, 100) + '%';
  fill.className = 'formula__total-fill' + (totalPct > 100 ? ' over' : '');
  document.getElementById('formulaTotalPct').textContent = totalPct + '%';
  document.getElementById('formulaTotalRemaining').textContent = totalPct === 100 ? '✓ Completo' : `(${100 - totalPct}% restante)`;

  list.querySelectorAll('.formula__oil-range').forEach(range => {
    range.addEventListener('input', () => {
      const idx = parseInt(range.dataset.idx);
      formulaState.oils[idx].pct = parseInt(range.value);
      renderFormulaOils();
      renderFormulaPreview();
    });
  });

  list.querySelectorAll('.formula__oil-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      formulaState.oils.splice(idx, 1);
      if (formulaState.oils.length > 0) distributeFormulaEvenly();
      renderFormulaOils();
      renderFormulaPreview();
    });
  });
}

function renderFormulaPreview() {
  const canvas = document.getElementById('formulaPieChart');
  const ctx = canvas.getContext('2d');
  const stats = document.getElementById('formulaPreviewStats');
  const cx = 100, cy = 100, r = 80;

  ctx.clearRect(0, 0, 200, 200);

  if (formulaState.oils.length === 0) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = '#EDE4D8';
    ctx.fill();
    stats.innerHTML = '<p class="formula__preview-empty">Agrega aceites para ver la mezcla</p>';
    return;
  }

  const totalPct = formulaState.oils.reduce((s, o) => s + o.pct, 0);
  let startAngle = -Math.PI / 2;

  formulaState.oils.forEach((oil, i) => {
    const sliceAngle = (oil.pct / Math.max(totalPct, 1)) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = FORMULA_COLORS[i % FORMULA_COLORS.length];
    ctx.fill();
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.stroke();
    startAngle += sliceAngle;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, 35, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFBF5';
  ctx.fill();

  ctx.fillStyle = '#2D2926';
  ctx.font = '600 16px Lato, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(totalPct + '%', cx, cy - 6);
  ctx.font = '400 10px Lato, sans-serif';
  ctx.fillStyle = '#8B7B6E';
  ctx.fillText(formulaState.oils.length + ' aceite' + (formulaState.oils.length > 1 ? 's' : ''), cx, cy + 10);

  const totalOilGrams = formulaState.grams * (formulaState.oilLoad / 100);
  const waxGrams = formulaState.grams - totalOilGrams;
  stats.innerHTML = formulaState.oils.map((oil, i) => {
    const info = getOilInfo(oil.key);
    const name = info ? info.name : oil.key;
    const grams = Math.round(totalOilGrams * oil.pct / Math.max(totalPct, 1) * 10) / 10;
    return `<div class="formula__preview-item"><span class="formula__preview-dot" style="background:${FORMULA_COLORS[i % FORMULA_COLORS.length]}"></span>${escapeHTML(name)}: ${oil.pct}% (${grams}g)</div>`;
  }).join('') + `<div class="formula__preview-item" style="margin-top:0.4rem;font-weight:600;color:#5A4A3A">🕯️ Cera: ${Math.round(waxGrams)}g · Aceites: ${Math.round(totalOilGrams)}g</div>`;
}

function generateFormulaCard() {
  if (formulaState.oils.length === 0) {
    alert('Agrega al menos un aceite esencial.');
    return;
  }
  const totalPct = formulaState.oils.reduce((s, o) => s + o.pct, 0);
  if (totalPct !== 100) {
    alert('Los porcentajes deben sumar 100%. Actualmente suman ' + totalPct + '%.');
    return;
  }

  const wax = WAX_DATA[formulaState.wax];
  const totalOilGrams = formulaState.grams * (formulaState.oilLoad / 100);
  const totalOilMl = Math.round(totalOilGrams / 0.9 * 10) / 10;
  const totalDrops = Math.round(totalOilMl * 20);
  const waxGrams = formulaState.grams - totalOilGrams;
  const cureTime = formulaState.wax === 'soy' ? '1-2 semanas' : formulaState.wax === 'beeswax' ? '3-5 días' : '2-3 días';

  const oilNames = formulaState.oils.map(o => {
    const info = getOilInfo(o.key);
    return info ? info.name : o.key;
  });
  document.getElementById('formulaCardName').textContent = `Fórmula: ${oilNames.join(' + ')}`;

  document.getElementById('formulaCardSummary').innerHTML = `
    <span class="formula__card-tag">${wax.name}</span>
    <span class="formula__card-tag">${formulaState.grams}g total</span>
    <span class="formula__card-tag">${formulaState.oilLoad}% carga</span>
    <span class="formula__card-tag">${totalDrops} gotas (~${totalOilMl}ml)</span>
    <span class="formula__card-tag">Curado: ${cureTime}</span>
  `;

  document.getElementById('formulaCardBreakdown').innerHTML = `
    <h4>Desglose de Aceites</h4>
    ${formulaState.oils.map((oil, i) => {
      const info = getOilInfo(oil.key);
      const icon = info ? info.icon : '🧪';
      const name = info ? info.name : oil.key;
      const grams = Math.round(totalOilGrams * oil.pct / 100 * 10) / 10;
      const ml = Math.round(grams / 0.9 * 10) / 10;
      const drops = Math.round(ml * 20);
      return `<div class="formula__breakdown-row"><span>${icon}</span><span>${escapeHTML(name)}</span><span>${oil.pct}%</span><span>${drops} gotas · ${grams}g</span></div>`;
    }).join('')}
  `;

  document.getElementById('formulaCardMaterials').innerHTML = `
    <h4>Materiales Necesarios</h4>
    <ul>
      <li><span>Cera de ${wax.name.toLowerCase()}</span><span>${Math.round(waxGrams)}g</span></li>
      ${formulaState.oils.map(oil => {
        const info = getOilInfo(oil.key);
        const name = info ? info.name : oil.key;
        const grams = Math.round(totalOilGrams * oil.pct / 100 * 10) / 10;
        const ml = Math.round(grams / 0.9 * 10) / 10;
        const drops = Math.round(ml * 20);
        return `<li><span>Aceite esencial de ${name.toLowerCase()} (${oil.pct}%)</span><span>${drops} gotas (~${ml}ml)</span></li>`;
      }).join('')}
      <li><span>Colorante para velas</span><span>${formulaState.wax === 'beeswax' ? 'No necesita' : (formulaState.grams < 200 ? '1-2 gotas' : '3-4 gotas')}</span></li>
      <li><span>Pabilo de algodón o madera</span><span>1 unidad</span></li>
      <li><span>Sujetapabilos</span><span>1-2 unidades</span></li>
    </ul>
  `;

  const scentStep = formulaState.oils.map(oil => {
    const info = getOilInfo(oil.key);
    const name = info ? info.name : oil.key;
    const grams = totalOilGrams * oil.pct / 100;
    const ml = Math.round(grams / 0.9 * 10) / 10;
    const drops = Math.round(ml * 20);
    return `${drops} gotas de ${name.toLowerCase()} (${oil.pct}%)`;
  }).join(', ');

  document.getElementById('formulaCardSteps').innerHTML = `
    <h4>Instrucciones de Fabricación</h4>
    <ol>
      <li>Prepara tu área de trabajo y ten todos los materiales listos y el contenedor limpio.</li>
      <li>Pesa ${Math.round(waxGrams)}g de cera de ${wax.name.toLowerCase()} en un recipiente apto para baño maría o microondas.</li>
      <li>Funde la cera a ${wax.melt} removiendo cada 30 segundos. Nunca la dejes desatendida ni supere los 90°C.</li>
      <li>Prepara el contenedor: sujeta el pabilo en el centro con sujetapabilos o palillos.</li>
      <li>Retira la cera del fuego y deja enfriar a ${wax.pour}. Añade ${scentStep}.</li>
      <li>Remueve suavemente durante 2 minutos para integrar los aceites uniformemente.</li>
      <li>Vierte la cera lentamente en el contenedor manteniendo el pabilo centrado. Deja 1cm libre arriba.</li>
      <li>Reposo 24h sin mover. Si hay hundimiento, realiza un segundo vertido fino.</li>
      <li>Recorta el pabilo a 0.5-1cm. Cura en lugar fresco y oscuro durante ${cureTime}.</li>
      <li>Primera quema: deja que la cera llegue hasta los bordes (1h por cada 2.5cm de diámetro).</li>
    </ol>
  `;

  const notes = formulaState.oils.map(oil => {
    const info = getOilInfo(oil.key);
    if (!info) return '';
    return `${info.name}: ${info.best || ''}`;
  }).filter(Boolean).join('. ');
  document.getElementById('formulaCardNotes').innerHTML = `
    <h4>Notas Terapéuticas</h4>
    <p>${notes || 'Mezcla personalizada.'} Nunca dejes la vela sin supervisión. Quema en espacios ventilados.</p>
  `;

  document.getElementById('formulaCard').classList.remove('hidden');
  document.getElementById('formulaCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function shareFormula() {
  const wax = WAX_DATA[formulaState.wax];
  const totalOilGrams = formulaState.grams * (formulaState.oilLoad / 100);
  const waxGrams = formulaState.grams - totalOilGrams;
  const cureTime = formulaState.wax === 'soy' ? '1-2 semanas' : formulaState.wax === 'beeswax' ? '3-5 días' : '2-3 días';

  let text = `🕯️ Mi Fórmula AromArt\n`;
  text += `━━━━━━━━━━━━━━━━━━━━\n`;
  text += `Cera: ${wax.name} · ${Math.round(waxGrams)}g\n`;
  text += `Carga: ${formulaState.oilLoad}% · ${formulaState.grams}g total\n`;
  text += `Curado: ${cureTime}\n\n`;
  text += `Aceites:\n`;
  formulaState.oils.forEach(oil => {
    const info = getOilInfo(oil.key);
    const name = info ? info.name : oil.key;
    const grams = totalOilGrams * oil.pct / 100;
    const ml = Math.round(grams / 0.9 * 10) / 10;
    const drops = Math.round(ml * 20);
    text += `  ${oil.pct}% ${name} — ${drops} gotas (${Math.round(grams * 10) / 10}g)\n`;
  });
  text += `\nGenerado con AromArt 🌿`;

  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('formulaToast');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2500);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    const toast = document.getElementById('formulaToast');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2500);
  });
}

function saveFormulaToBook() {
  const wax = WAX_DATA[formulaState.wax];
  const totalOilGrams = formulaState.grams * (formulaState.oilLoad / 100);
  const totalOilMl = Math.round(totalOilGrams / 0.9 * 10) / 10;
  const totalDrops = Math.round(totalOilMl * 20);

  const scentKeys = formulaState.oils.map(o => o.key.replace('db_', ''));
  const scentNames = formulaState.oils.map(o => {
    const info = getOilInfo(o.key);
    return info ? info.name : o.key;
  }).join(' + ');
  const ratios = formulaState.oils.map(o => o.pct);

  const recipe = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    name: `Fórmula: ${scentNames}`,
    badge: 'Fórmula personalizada',
    config: {
      wax: formulaState.wax,
      waxName: wax.name,
      scents: scentKeys,
      ratios,
      scentNames,
      color: '#F5E6D3',
      container: 'jar',
      containerName: 'Frasco',
      size: 'custom',
      sizeName: 'Personalizado',
      grams: formulaState.grams
    },
    materials: [
      { label: `Cera de ${wax.name.toLowerCase()}`, value: `${Math.round(formulaState.grams - totalOilGrams)}g` },
      ...formulaState.oils.map(oil => {
        const info = getOilInfo(oil.key);
        const name = info ? info.name : oil.key;
        const grams = totalOilGrams * oil.pct / 100;
        const ml = Math.round(grams / 0.9 * 10) / 10;
        const drops = Math.round(ml * 20);
        return { label: `${name} (${oil.pct}%)`, value: `${drops} gotas (~${ml}ml)` };
      })
    ],
    tips: document.getElementById('formulaCardNotes').querySelector('p')?.textContent || ''
  };

  const book = loadRecipeBook();
  book.unshift(recipe);
  saveRecipeBook(book);
  renderRecipeBook();

  const toast = document.getElementById('formulaToast');
  toast.textContent = '¡Fórmula guardada en el recetario!';
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
    toast.textContent = '¡Fórmula copiada al portapapeles!';
  }, 2500);
}
