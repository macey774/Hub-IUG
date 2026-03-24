// api/chat.js
export default async function handler(req, res) {
  // Autoriser uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  // Récupérer la clé API depuis les variables d'environnement
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error('OPENROUTER_API_KEY not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const systemPrompt = {
    role: 'system',
    content: `Tu es OrientIUG, un assistant d’orientation de l’Institut Universitaire du Golfe de Guinée (IUG).
Tu connais parfaitement les filières ESG (Gestion, Commerce, Management), ISTA (Informatique, Développement, Data Science) et ISA (Agronomie, Environnement, Développement durable).
Tu connais les conditions d’admission (baccalauréat, étude de dossier), les pièces à fournir (demande manuscrite, copies de diplômes, acte de naissance, visite médicale) et la procédure d’inscription.
Tu réponds toujours en français, de manière chaleureuse, concise et bienveillante.
Si on te parle d’inscription, tu expliques qu’il faut remplir la fiche d’inscription en ligne et tu donnes un lien vers celle-ci (à adapter).
Tu ne donnes jamais de conseils médicaux, juridiques ou hors du cadre universitaire.`
  };

  const apiMessages = [systemPrompt, ...messages.slice(-8)];

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://votre-site.com', // ⚠️ À remplacer par votre domaine plus tard
        'X-Title': 'Hub IUG'
      },
      body: JSON.stringify({
        model: 'mistralai/mixtral-8x22b-instruct',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 500,
        top_p: 0.9
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error:', response.status, errorText);
      return res.status(500).json({ error: 'API request failed' });
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Error calling OpenRouter:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
