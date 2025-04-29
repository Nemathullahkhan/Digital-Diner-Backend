const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    try {
      const menuItems = await prisma.menuItem.findMany();
      return {
        statusCode: 200,
        body: JSON.stringify(menuItems)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method not allowed' })
  };
}; 