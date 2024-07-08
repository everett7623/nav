// 可以在这里定义 API 请求方法
export const fetchSites = async () => {
  try {
    const response = await fetch('/api/sites');
    if (!response.ok) {
      throw new Error('Failed to fetch sites');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sites:', error.message);
    throw error;
  }
}
