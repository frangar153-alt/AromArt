// ===== AI AROMATHERAPY EXPERT ENGINE =====

const AI = (() => {

  // === KNOWLEDGE GRAPH ===
  const MOOD_MAP = {
    estres:       { scents: ['lavender','chamomile','ylang'],          ratios: [50,30,20], wax: 'soy',     reason: 'La combinación calmante de lavanda y manzanilla reduce el cortisol. Cera de soja para quemado limpio y relajante.' },
    ansiedad:     { scents: ['lavender','rose','chamomile'],           ratios: [45,35,20], wax: 'soy',     reason: 'Lavanda y rosa armonizan el sistema nervioso. La manzanilla aporta suavidad. Ideal para momentos de tensión emocional.' },
    insomnio:     { scents: ['lavender','chamomile','vanilla'],        ratios: [50,30,20], wax: 'soy',     reason: 'El trío más potente para inducir sueño: lavanda seda, manzanilla calma, vainilla reconforta. Soja para quemado limpio en el dormitorio.' },
    tristeza:     { scents: ['jasmine','rose','vanilla'],              ratios: [40,35,25], wax: 'coconut', reason: 'Jazmín eleva el ánimo, rosa nutre el corazón, vainilla da calidez. Coco para difusión suave y envolvente.' },
    cansancio:    { scents: ['peppermint','eucalyptus','cinnamon'],    ratios: [40,35,25], wax: 'paraffin', reason: 'Menta y eucalipto despiertan los sentidos. Canela estimula la circulación. Parafina para máximo lanzamiento de aroma.' },
    concentracion:{ scents: ['sandalwood','peppermint','eucalyptus'],  ratios: [45,30,25], wax: 'soy',     reason: 'Sándalo centra la mente, menta despierta, eucalipto aclara. La soja permite sesiones largas sin humo.' },
    meditacion:   { scents: ['sandalwood','lavender','rose'],          ratios: [50,30,20], wax: 'beeswax', reason: 'Sándalo para conexión espiritual, lavanda para calma, rosa para apertura del corazón. Abeja para su vibración natural.' },
    romanticismo: { scents: ['rose','ylang','jasmine'],                ratios: [40,35,25], wax: 'coconut', reason: 'El trío afrodisíaco por excelencia. Rosa abre el corazón, ylang despierta la sensualidad, jazmín inspira confianza.' },
    resfriado:    { scents: ['eucalyptus','peppermint','lavender'],    ratios: [45,35,20], wax: 'soy',     reason: 'Eucalipto descongestiona, menta abre vías, lavanda calma la tos. El trio respiratorio por excelencia.' },
    dolor:        { scents: ['peppermint','lavender','eucalyptus'],    ratios: [45,30,25], wax: 'coconut', reason: 'Menta es analgésica, lavanda antiinflamatoria, eucalipto mejora circulación. Coco para aplicación en masaje con la vela tibia.' },
    digestion:    { scents: ['chamomile','peppermint','lavender'],     ratios: [45,30,25], wax: 'beeswax', reason: 'Manzanilla calma el estómago, menta alivia gases, lavanda reduce espasmos. Abeja para efecto suave.' },
    energia:      { scents: ['cinnamon','peppermint','eucalyptus'],    ratios: [40,35,25], wax: 'paraffin', reason: 'Canela estimula, menta vigoriza, eucalipto despierta. Parafina para intensidad máxima de aroma.' },
    hogar:        { scents: ['vanilla','honey','cinnamon'],            ratios: [35,35,30], wax: 'beeswax', reason: 'Vainilla y miel evocan hogar con dulzura envolvente, canela aporta calidez. Abeja para aroma natural acogedor.' },
    limpieza:     { scents: ['eucalyptus','lavender','peppermint'],    ratios: [40,35,25], wax: 'soy',     reason: 'Eucalipto purifica, lavanda armoniza, menta refresca. Soja para una quemada limpia en espacios amplios.' },
    creatividad:  { scents: ['rose','jasmine','cinnamon'],             ratios: [40,35,25], wax: 'coconut', reason: 'Rosa inspira, jazmín eleva, canela estimula. Coco para difusión amplia que llena el espacio creativo.' },
    autoestima:   { scents: ['rose','ylang','sandalwood'],             ratios: [40,35,25], wax: 'soy',     reason: 'Rosa nutre el amor propio, ylang eleva el ánimo, sándalo da seguridad interior. Soja para sesiones de autocuidado.' },
    proteccion:   { scents: ['eucalyptus','sandalwood','lavender'],    ratios: [40,35,25], wax: 'beeswax', reason: 'Eucalipto purifica el espacio, sándalo crea escudo energético, lavanda armoniza. Abeja para su poder ancestral de protección.' },
    gratitud:     { scents: ['rose','vanilla','sandalwood'],           ratios: [40,35,25], wax: 'beeswax', reason: 'Rosa abre el corazón a la gratitud, vainilla reconforta, sándalo eleva. Cera de abeja para conectar con la naturaleza.' }
  };

  const SYNERGY_DB = [
    { a: 'lavender', b: 'chamomile',  effect: 'Sinergia sedante profunda. 40% más efectiva para inducir sueño que cada aroma solo.', ratio: '60/40' },
    { a: 'lavender', b: 'peppermint', effect: 'Equilibrio perfecto: calma y claridad mental. Ideal para trabajo relajado.', ratio: '70/30' },
    { a: 'lavender', b: 'eucalyptus', effect: 'Respiración profunda y calma. Excelente para resfriados con ansiedad.', ratio: '60/40' },
    { a: 'rose',     b: 'sandalwood', effect: 'Apertura espiritual profunda. Combina el corazón con la mente.', ratio: '50/50' },
    { a: 'rose',     b: 'ylang',      effect: 'Doble poder afrodisíaco. Sensualidad y romance amplificados.', ratio: '60/40' },
    { a: 'sandalwood', b: 'vanilla',  effect: 'Calidez reconfortante con profundidad espiritual. Meditación acogedora.', ratio: '50/50' },
    { a: 'cinnamon', b: 'vanilla',    effect: 'Bebida de invierno aromática. Hogar y celebración.', ratio: '40/60' },
    { a: 'cinnamon', b: 'peppermint', effect: 'Energía estimulante y frescura. Despertar matutino potente.', ratio: '50/50' },
    { a: 'eucalyptus', b: 'peppermint', effect: 'Doble potencia respiratoria. Máxima descongestión.', ratio: '50/50' },
    { a: 'jasmine',  b: 'rose',        effect: 'Alegría y amor combinados. Antidepresivo floral natural.', ratio: '50/50' },
    { a: 'jasmine',  b: 'ylang',       effect: 'Euforia tropical. Optimismo y sensualidad exótica.', ratio: '50/50' },
    { a: 'lavender', b: 'vanilla',     effect: 'Sueño dulce y profundo. Reconfortante para niños y adultos.', ratio: '60/40' },
    { a: 'sandalwood', b: 'lavender',  effect: 'Meditación guiada por calma. Enfoque sin tensión.', ratio: '50/50' },
    { a: 'chamomile', b: 'vanilla',    effect: 'Infusión de sueño. Calma nervios y reconforta.', ratio: '50/50' },
    { a: 'rose',     b: 'peppermint',  effect: 'Amor propio energizado. Claridad emocional con vitalidad.', ratio: '70/30' },
    { a: 'sandalwood', b: 'cinnamon',  effect: 'Meditación con calor. Ritual de invierno profundo.', ratio: '60/40' },
    { a: 'ylang',    b: 'lavender',    effect: 'Relajación sensual. Reduce presión arterial y calma.', ratio: '50/50' },
    { a: 'jasmine',  b: 'sandalwood',  effect: 'Confianza espiritual. Conexión interna elevada.', ratio: '50/50' },
    { a: 'eucalyptus', b: 'lavender',  effect: 'Spa respiratorio. Frescura y calma en equilibrio.', ratio: '50/50' },
    { a: 'chamomile', b: 'lavender',   effect: 'Alianza anti-estrés. Las dos reinas de la calma.', ratio: '50/50' },
    { a: 'tea_tree', b: 'eucalyptus',  effect: 'Doble antimicrobiano. Máxima purificación del aire.', ratio: '50/50' },
    { a: 'tea_tree', b: 'lavender',    effect: 'Antiséptico calmante. Limpieza sin agresividad.', ratio: '60/40' },
    { a: 'lemon',    b: 'lavender',    effect: 'Frescura y calma. El spa en casa por excelencia.', ratio: '50/50' },
    { a: 'lemon',    b: 'peppermint',  effect: 'Doble energía cítrica-mentolada. Despertar instantáneo.', ratio: '50/50' },
    { a: 'orange',   b: 'cinnamon',    effect: 'Ponche de Navidad. Alegría y calidez invernal.', ratio: '60/40' },
    { a: 'orange',   b: 'vanilla',     effect: 'Crema de naranja aromática. Confort y alegría.', ratio: '50/50' },
    { a: 'rosemary', b: 'peppermint',  effect: 'Doble estimulante mental. Concentración máxima.', ratio: '50/50' },
    { a: 'rosemary', b: 'lemon',       effect: 'Claridad y energía. Ideal para estudiar o trabajar.', ratio: '50/50' },
    { a: 'frankincense', b: 'sandalwood', effect: 'Doble sagrado. Meditación trascendental profunda.', ratio: '50/50' },
    { a: 'frankincense', b: 'lavender',  effect: 'Sanación emocional con calma. Ritual de cierre del día.', ratio: '60/40' },
    { a: 'patchouli', b: 'ylang',      effect: 'Doble afrodisíaco terroso-floral. Sensualidad profunda.', ratio: '50/50' },
    { a: 'patchouli', b: 'orange',     effect: 'Grounding alegre. Estabilización emocional positiva.', ratio: '60/40' },
    { a: 'bergamot', b: 'lavender',    effect: 'Anti-ansiedad premium. Calma sin sedación.', ratio: '50/50' },
    { a: 'bergamot', b: 'frankincense', effect: 'Elevación espiritual cítrica. Meditación luminosa.', ratio: '50/50' },
    { a: 'cedarwood', b: 'lavender',   effect: 'Bosque en calma. Sueño profundo y grounding.', ratio: '50/50' },
    { a: 'cedarwood', b: 'orange',     effect: 'Fogata cítrica. Acogedor y estabilizador.', ratio: '50/50' },
    { a: 'geranium', b: 'rose',        effect: 'Doble floral equilibrante. Sanación femenina.', ratio: '50/50' },
    { a: 'geranium', b: 'lavender',    effect: 'Equilibrio emocional suave. Calma diaria.', ratio: '50/50' },
    { a: 'clarysage', b: 'lavender',   effect: 'Relajación hormonal. Alivio de PMS y tensión.', ratio: '60/40' },
    { a: 'lemongrass', b: 'tea_tree',  effect: 'Purificación potente. Antimicrobiano cítrico.', ratio: '50/50' },
    { a: 'cypress',  b: 'eucalyptus',  effect: 'Respiratorio forestal. Descongestión profunda.', ratio: '50/50' },
    { a: 'pine',     b: 'cedarwood',   effect: 'Bosque profundo. Grounding y purificación del aire.', ratio: '50/50' },
    { a: 'neroli',   b: 'lavender',    effect: 'Regeneración nerviosa. Anti-pánico y sueño reparador.', ratio: '50/50' },
    { a: 'ginger',   b: 'orange',      effect: 'Té de jengibre aromático. Calidez y digestión.', ratio: '40/60' },
    { a: 'blackpepper', b: 'ginger',   effect: 'Doble picante analgésico. Máximo calor muscular.', ratio: '50/50' },
    { a: 'palosanto', b: 'frankincense', effect: 'Ritual sagrado doble. Purificación y meditación suprema.', ratio: '50/50' },
    { a: 'mandarina', b: 'chamomile',  effect: 'Infantil calmante. Sueño dulce para niños.', ratio: '50/50' },
    { a: 'honey',    b: 'vanilla',     effect: 'Dulzura absoluta. Confort hogareño irresistible.', ratio: '50/50' },
    { a: 'honey',    b: 'cinnamon',    effect: 'Té de miel especiado. Calidez invernal reconfortante.', ratio: '60/40' },
    { a: 'honey',    b: 'lavender',    effect: 'Dulzura calmante. Relajación con ternura.', ratio: '60/40' },
    { a: 'honey',    b: 'orange',      effect: 'Miel con naranja. Alegría cálida y acogedora.', ratio: '50/50' },
    { a: 'honey',    b: 'chamomile',   effect: 'Infusión de miel. Calma dulce y nutritiva.', ratio: '50/50' }
  ];

  // Conversation memory for chat
  const chatHistory = [];
  const CHAT_KNOWLEDGE = [
    { q: [/dolor de cabeza|migraña|cefalea/i], a: 'Para dolores de cabeza recomiendo **menta** (analgesia directa) y **lavanda** (reduce tensión). Aplica la vela tibia en sienes y nuca. La combinación 70% menta / 30% lavanda es especialmente efectiva. También el **eucalipto** mejora la circulación cerebral.' },
    { q: [/ansiedad|nervios|angustia|pánico/i], a: 'La ansiedad responde muy bien a **lavanda** (reduce cortisol un 36% en estudios), **manzanilla** (calma el sistema nervioso) y **rosa** (armoniza emociones). Para ataques de pánico, inhala directamente lavanda + manzanilla. Quema la vela 15 minutos antes de situaciones estresantes.' },
    { q: [/dormir|insomnio|sueño|no puedo dormir/i], a: 'El protocolo más efectivo para el insomnio: **lavanda** + **manzanilla** + **vainilla** (proporción 50/30/20). Quema la vela 30 minutos antes de dormir con las luces bajas. La vainilla estimula serotonina que se convierte en melatonina. Evita menta y eucalipto antes de dormir.' },
    { q: [/meditar|meditación|espiritual|conectar/i], a: 'Para meditación profunda, **sándalo** es el rey: calma las ondas cerebrales y favorece estados theta. Combínalo con **lavanda** para calma o **rosa** para apertura del corazón. La cera de abeja es ideal por su vibración natural y su llama cálida. Quema 10 min antes de comenzar.' },
    { q: [/resfriado|gripe|tos|nariz|mocos|garganta/i], a: 'Para resfriados: **eucalipto** (descongestiona vías respiratorias), **menta** (abre bronquios) y **lavanda** (calma la tos). Haz vapor: acerca la vela encendida a tu cara (con cuidado) e inhala. El eucalipto tiene propiedades antivirales comprobadas.' },
    { q: [/romántico|pareja|romance|cita|amor/i], a: 'Para una velada romántica: **rosa** + **ylang ylang** + **jazmín**. El trío afrodisíaco por excelencia. Rosa abre el corazón, ylang es sensual (reduce inhibiciones), jazmín genera confianza. Usa cera de coco para difusión suave. Tamaño mediano, contenedor de taza para intimidad.' },
    { q: [/estudiar|examen|concentrar|enfoque|focus|trabajar/i], a: 'Para concentración: **sándalo** (enfoque mental profundo) + **menta** (alerta sin ansiedad) + **eucalipto** (aclara la mente). Proporción 50/30/20. Evita aromas muy relajantes como manzanilla. Quema en intervalos de 45 min con descansos de 15.' },
    { q: [/estrés|estresado|tenso|tensión|agobio/i], a: 'El estrés crónico responde a: **lavanda** (el anti-estrés #1), **ylang ylang** (baja presión arterial) y **vainilla** (libera serotonina). Protocolo: quema 1h al llegar a casa. Cera de soja para quemado limpio y prolongado.' },
    { q: [/energía|cansado|fatiga|despertar|mañana/i], a: 'Para activarte: **canela** (estimula circulación y mente), **menta** (despierta instantáneamente) y **eucalipto** (frescura). Evita lavanda y manzanilla que relajan. Cera de parafina para máximo lanzamiento. Quema por la mañana 20-30 min.' },
    { q: [/depresión|triste|decaído|ánimo|deprimido/i], a: 'Para estados de ánimo bajos: **jazmín** (antidepresivo natural, aumenta confianza), **rosa** (amor propio) y **vainilla** (calidez emocional). En estudios, el jazmín incrementa la sensación de bienestar un 40%. Combina con luz natural y la vela encendida.' },
    { q: [/mezclar|combinar|mix|blend|juntos/i], a: 'Reglas de mezcla: 1) Máximo 3 aceites por vela. 2) Elige una nota alta (fresca: menta, eucalipto), media (floral: lavanda, rosa, jazmín) y baja (amaderada: sándalo, canela). 3) Proporción general 50/30/20. 4) Siempre prueba primero en una vela pequeña.' },
    { q: [/cera|mejor cera|tipo de cera|cuál cera/i], a: '**Soja**: ecológica, quema limpia 50h/lb, ideal para aromaterapia. **Abeja**: purifica aire, aroma natural miel, vibra alta. **Coco**: ultra suave, mejor difusión, mezcla cremosa. **Parafina**: económica, máximo color y aroma, pero humo. Para terapia: soja o abeja.' },
    { q: [/cuánto aceite|cantidad|dosis|proporción|gotas/i], a: 'La carga de fragancia ideal es **6-10%** del peso de la cera (recomendado 8%). Ejemplo: 250g de cera = 20g de aceite (~40 gotas). Nunca excedas el 12% o la vela no quemará bien. Añade el aceite a 60°C, nunca caliente.' },
    { q: [/seguridad|peligro|cuidado|quemadura|precaución/i], a: 'Seguridad: 1) Nunca dejes velas sin supervisión. 2) Mantén alejado de materiales inflamables. 3) Recorta pabilo a 6mm. 4) No quemes más de 4h seguidas. 5) Alérgicos: evita canela y menta directamente. 6) Embarazadas: consulta antes de usar sándalo, romero y canela.' },
    { q: [/niño|bebé|infantil|kids/i], a: 'Para niños (3+ años): solo **manzanilla** y **lavanda**, suaves y seguros. Reduce la dosis al 4-5%. Nunca menta pura ni eucalipto en menores de 6. Supervisa siempre. Cera de soja o abeja, sin colorantes artificiales.' },
    { q: [/mascota|perro|gato|animal/i], a: '¡Cuidado! Algunos aceites son tóxicos para mascotas. **EVITA** en gatos: menta, eucalipto, canela, árbol de té. Seguros para perros: lavanda y manzanilla (dosis baja). Siempre ventilación y acceso a escape. Consulta con tu veterinario.' },
    { q: [/cuánto tiempo|duración|horas|quemar/i], a: 'Tiempo ideal de quemado: **1 hora por cada 2.5cm de diámetro** de la vela. Para una mediana (7-8cm): 3 horas máximo por sesión. Esto evita túneles y maximiza el aroma. Deja enfriar completamente entre sesiones.' },
    { q: [/color|significado|cromatoterapia/i], a: 'Colores y terapia: **Blanco** = pureza, limpieza. **Lavanda** = espiritualidad, calma. **Rosa** = amor, ternura. **Dorado** = abundancia, energía solar. **Verde** = sanación, equilibrio. **Rojo** = pasión, vitalidad. **Azul** = paz, comunicación. Elige el color que resuene con tu intención.' },
    { q: [/aceite esencial puro|calidad|cómo elegir|comprar/i], a: 'Para velas terapéuticas necesitas aceites **100% puros** (no fragrance). Busca: botella oscura, nombre latino en la etiqueta, país de origen, lote. Marcas fiables: DoTerra, Young Living, Pranarom. Evita "fragrance oil" — no tienen propiedades terapéuticas.' },
    { q: [/guardar|almacenar|caducar|conservar/i], a: 'Conserva los aceites en lugar fresco, oscuro y seco. Dura 1-3 años sellados. Las velas curadas mejoran con el tiempo (soja: 2 semanas mínimo). Si el aroma se debilita, el aceite se ha degradado. Nevera NO recomendada para velas.' },
    { q: [/miel|honey|dulce|caramelo/i], a: '🍯 **Miel**: aroma dulce, cálido y envolvente. Evoca hogar, seguridad y bienestar. Ideal para velas de invierno y ambientes acogedores. Combina perfectamente con **vainilla** (doble dulzura), **canela** (té de miel especiado) y **naranja** (alegría cálida). Usa cera de abeja para realzar el aroma natural.' }
  ];

  // === ANALYZE MOOD ===
  function analyzeMood(input) {
    const text = input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const results = [];

    Object.entries(MOOD_MAP).forEach(([mood, data]) => {
      const keywords = {
        estres: ['estres','stress','tenso','tension','agobiado','agobio','sobrepasado','presion'],
        ansiedad: ['ansiedad','ansioso','nervioso','nervios','angustia','preocupado','inquieto','miedo'],
        insomnio: ['insomnio','dormir','sueno','despierto','no puedo dormir','duermo mal','desvelo'],
        tristeza: ['triste','tristeza','llorar','pena','melancolico','bajon','soledad','vacío'],
        cansancio: ['cansado','cansancio','fatiga','agotado','sin energia','exhausto','pesado'],
        concentracion: ['concentrar','concentracion','enfoque','focus','estudiar','examen','atencion','distraido'],
        meditacion: ['meditar','meditacion','espiritual','oracion','conectar','interior','paz','zen'],
        romanticismo: ['romantico','romance','pareja','cita','amor','sensual','intimidad','romantica'],
        resfriado: ['resfriado','gripe','tos','mocos','garganta','congestion','nariz','enfermo'],
        dolor: ['dolor','dolor de cabeza','migrana','muscular','espalda','articulaciones'],
        digestion: ['digestion','estomago','hinchazon','nauseas','indigestion','gases'],
        energia: ['energia','energetico','despertar','vigor','activar','fuerza','potente'],
        hogar: ['hogar','casa','acogedor','invierno','calido','cozy','navidad','miel'],
        limpieza: ['limpiar','purificar','limpieza','energia negativa','espacio','aura'],
        creatividad: ['creatividad','crear','inspiracion','artistico','imaginar','ideas'],
        autoestima: ['autoestima','confianza','amor propio','seguridad','valor','quererme'],
        proteccion: ['proteccion','proteger','escudo','seguridad','miedo','negatividad'],
        gratitud: ['gratitud','agradecer','bendiciones','abundancia','gracias','positivo']
      };

      const moodKeywords = keywords[mood] || [];
      let score = 0;
      moodKeywords.forEach(kw => {
        if (text.includes(kw)) score += kw.length;
      });
      if (score > 0) results.push({ mood, data, score });
    });

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 2);
  }

  // === RECOMMEND FROM INPUT ===
  function recommend(input) {
    const matches = analyzeMood(input);
    if (matches.length === 0) return null;

    const top = matches[0];
    const scentDetails = top.data.scents.map(s => {
      const d = SCENT_DATA[s];
      return d ? `${d.icon} **${d.name}** (${d.props.join(', ')})` : s;
    });

    return {
      mood: top.mood,
      scents: top.data.scents,
      ratios: top.data.ratios || [50,30,20],
      wax: top.data.wax,
      reason: top.data.reason,
      scentDetails,
      secondary: matches[1] ? {
        mood: matches[1].mood,
        scents: matches[1].data.scents,
        reason: matches[1].data.reason
      } : null
    };
  }

  // === FIND SYNERGIES ===
  function findSynergies(scent1, scent2) {
    return SYNERGY_DB.find(s =>
      (s.a === scent1 && s.b === scent2) ||
      (s.a === scent2 && s.b === scent1)
    );
  }

  function getBlendsForScent(scentKey) {
    return SYNERGY_DB.filter(s => s.a === scentKey || s.b === scentKey);
  }

  // === GENERATE OPTIMAL BLEND ===
  function generateBlend(goal) {
    const text = goal.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const blendProfiles = [
      { k: ['relaj','calma','tranqui','dormir','suave'], blend: ['lavender','chamomile','vanilla'], r: [50,30,20], wax: 'soy', name: 'Serenidad' },
      { k: ['ener','fuerza','despertar','vigor','activ'], blend: ['peppermint','cinnamon','eucalyptus'], r: [40,30,30], wax: 'paraffin', name: 'Impulso' },
      { k: ['amor','romance','sensual','pareja','corazon'], blend: ['rose','ylang','jasmine'], r: [40,30,30], wax: 'coconut', name: 'Pasión' },
      { k: ['medit','espirit','oracion','zen','interior'], blend: ['sandalwood','lavender','rose'], r: [50,30,20], wax: 'beeswax', name: 'Templo Interior' },
      { k: ['concentr','focus','estudi','trabajo','mente'], blend: ['sandalwood','peppermint','eucalyptus'], r: [40,30,30], wax: 'soy', name: 'Claridad' },
      { k: ['sanar','curar','salud','inmun','respir'], blend: ['eucalyptus','lavender','peppermint'], r: [40,35,25], wax: 'soy', name: 'Sanación' },
      { k: ['hogar','cozy','invierno','acogedor','navidad'], blend: ['vanilla','honey','cinnamon'], r: [35,35,30], wax: 'beeswax', name: 'Hogar' },
      { k: ['purif','limpi','proteccion','aura','espacio'], blend: ['eucalyptus','sandalwood','lavender'], r: [40,35,25], wax: 'beeswax', name: 'Purificación' },
      { k: ['fiesta','celebr','alegria','feliz','diver'], blend: ['cinnamon','jasmine','vanilla'], r: [35,35,30], wax: 'paraffin', name: 'Celebración' },
      { k: ['autoestima','confianza','querer','valor'], blend: ['rose','sandalwood','ylang'], r: [40,35,25], wax: 'soy', name: 'Empoderamiento' }
    ];

    let best = null, bestScore = 0;
    blendProfiles.forEach(profile => {
      let score = 0;
      profile.k.forEach(kw => { if (text.includes(kw)) score += kw.length; });
      if (score > bestScore) { bestScore = score; best = profile; }
    });

    if (!best) best = blendProfiles[0]; // default

    const details = best.blend.map((s, i) => {
      const d = SCENT_DATA[s];
      return { key: s, name: d ? d.name : s, icon: d ? d.icon : '🧪', ratio: best.r[i] };
    });

    return {
      name: best.name,
      scents: best.blend,
      ratios: best.r,
      wax: best.wax,
      details,
      tips: `Mezcla ${details.map(d => `${d.ratio}% ${d.name}`).join(' + ')}. Añade los aceites a 60°C en orden de ratio de mayor a menor.`
    };
  }

  // === CHAT ENGINE ===
  function chat(userMessage) {
    const text = userMessage.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Check knowledge base
    for (const entry of CHAT_KNOWLEDGE) {
      for (const pattern of entry.q) {
        if (pattern.test(text) || pattern.test(userMessage)) {
          chatHistory.push({ role: 'user', text: userMessage });
          chatHistory.push({ role: 'ai', text: entry.a });
          return entry.a;
        }
      }
    }

    // Check if asking about a specific scent
    for (const [key, data] of Object.entries(SCENT_DATA)) {
      const nameNorm = data.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (text.includes(nameNorm) || text.includes(key)) {
        const blends = getBlendsForScent(key);
        const blendInfo = blends.length > 0
          ? `\n\n**Mejores mezclas:** ${blends.slice(0, 3).map(b => {
              const other = b.a === key ? b.b : b.a;
              const od = SCENT_DATA[other];
              return `${data.name} + ${od ? od.name : other} (${b.ratio})`;
            }).join(' · ')}`
          : '';
        const answer = `${data.icon} **${data.name}**\n\n${data.desc}\n\n**Propiedades:** ${data.props.join(', ')}\n${data.best}${blendInfo}`;
        chatHistory.push({ role: 'user', text: userMessage });
        chatHistory.push({ role: 'ai', text: answer });
        return answer;
      }
    }

    // Fallback with mood analysis
    const rec = recommend(userMessage);
    if (rec) {
      const answer = `Por lo que describes, te recomiendo esta combinación:\n\n${rec.scentDetails.join('\n')}\n\n${rec.reason}\n\n**Cera sugerida:** ${WAX_DATA[rec.wax].name}`;
      chatHistory.push({ role: 'user', text: userMessage });
      chatHistory.push({ role: 'ai', text: answer });
      return answer;
    }

    // Default helpful response
    const defaultAnswer = `Puedo ayudarte con:\n\n- **Recomendaciones** por estado de ánimo o necesidad (estrés, insomnio, dolor...)\n- **Información** sobre cualquier aceite esencial\n- **Mezclas sinérgicas** para objetivos específicos\n- **Consejos** de seguridad, dosificación y quemado\n\nPrueba preguntarme algo como: *"¿Qué aceite me recomiendas para dormir?"* o *"Cuéntame sobre el sándalo"*`;
    chatHistory.push({ role: 'user', text: userMessage });
    chatHistory.push({ role: 'ai', text: defaultAnswer });
    return defaultAnswer;
  }

  // === APPLY RECOMMENDATION TO STATE ===
  function applyRecommendation(rec) {
    if (!rec) return;

    state.scents = rec.scents.slice();
    state.ratios = rec.ratios ? rec.ratios.slice() : null;
    state.wax = rec.wax;

    // Update UI — deselect all scents, then select recommended ones
    document.querySelectorAll('#scentOptions .config-option').forEach(b => b.classList.remove('active'));
    state.scents.forEach(sk => {
      const btn = document.querySelector(`[data-scent="${sk}"]`);
      if (btn) btn.classList.add('active');
    });

    document.querySelectorAll('#waxOptions .config-option').forEach(b => b.classList.remove('active'));
    const waxBtn = document.querySelector(`[data-wax="${rec.wax}"]`);
    if (waxBtn) waxBtn.classList.add('active');

    updatePreview();
  }

  function applyBlend(blend) {
    if (!blend) return;

    state.scents = blend.scents.slice();
    state.ratios = blend.ratios.slice();
    state.wax = blend.wax;

    document.querySelectorAll('#scentOptions .config-option').forEach(b => b.classList.remove('active'));
    state.scents.forEach(sk => {
      const btn = document.querySelector(`[data-scent="${sk}"]`);
      if (btn) btn.classList.add('active');
    });

    document.querySelectorAll('#waxOptions .config-option').forEach(b => b.classList.remove('active'));
    const waxBtn = document.querySelector(`[data-wax="${blend.wax}"]`);
    if (waxBtn) waxBtn.classList.add('active');

    updatePreview();
  }

  // Public API
  return { recommend, findSynergies, getBlendsForScent, generateBlend, chat, applyRecommendation, applyBlend, MOOD_MAP };
})();
