exports.handler = async function(event, context) {
  const API_TOKEN = 'c63c2b29d3e04c668d30a5ad5c8c9961';
  const API_URL = 'https://api.football-data.org/v4/competitions/WC/matches';

  try {
    const response = await fetch(API_URL, {
      headers: { 'X-Auth-Token': API_TOKEN }
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'API error: ' + response.status })
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
