import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PageDetail = () => {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pages/${id}`);
        if (!response.ok) {
          throw new Error('Page not found');
        }
        const data = await response.json();
        setPageData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPageData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>{pageData.title}</h1>
      <p style={{ whiteSpace: 'pre-wrap', fontSize: '18px', lineHeight: '1.6' }}>{pageData.content}</p>
      {/* Additional detailed content can be added here */}
      <section style={{ marginTop: '20px' }}>
        <h2>More Information</h2>
        <p>This section can include more detailed descriptions, images, or related links about {pageData.title}.</p>
      </section>
      <section style={{ marginTop: '20px' }}>
        <h2>Contact Information</h2>
        <p>For more details, please contact our support team or visit the relevant department.</p>
      </section>
    </div>
  );
};

export default PageDetail;
