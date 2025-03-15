const fetchBlogs = async () => {
  try {
    const response = await fetch('http://localhost/mql-dashboard/api/fetch_blog.php');
    const result = await response.json();

    if (result.status === 'success') {
      return result.data.map(({ id, title, author, created_at, featured_image_url, content }) => ({
        id,
        title,
        author,
        created_at,
        category: 'FOREX',
        image: featured_image,
        content,
      }));
    }

    return [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

export default fetchBlogs;