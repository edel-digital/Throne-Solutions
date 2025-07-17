import React from 'react';

const NewsInsights = () => {
  return (
    <div 
      id="newsletter"
      className="newsletter-section"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px 40px',
        fontFamily: "'Inter', sans-serif",
        color: '#333',
        scrollMarginTop: '80px',
      }}
    >
      <h1 style={{
        fontSize: '42px',
        fontWeight: '700',
        color: '#BC832B',
        textAlign: 'center',
        marginBottom: '40px',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '-0.5px',
        paddingTop: '20px',
        
      }}>Throne solutions Insights</h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        background: '#fff',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
        border: '1px solid #f0f0f0',
      }}>
        <div style={{
          maxWidth: '600px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#000',
            marginBottom: '20px',
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: '1.3'
          }}>Our Leadership Coaching Program prepares you for success.</h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '30px',
            color: '#444',
          }}>
            Join our community newsletter for expert coaching strategies, 
            mindfulness techniques, and exclusive resources to support 
            your personal growth and wellbeing.
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#BC832B',
              color: '#fff',
              fontWeight: '600',
              padding: '16px 40px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: "'Montserrat', sans-serif",
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#BC832B';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#BC832B';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Subscribe Now
          </a>
        </div>

        <div style={{ width: '100%', marginTop: '40px' }}>
          <h3 style={{
            fontSize: '26px',
            fontWeight: '700',
            color: '#BC832B',
            marginBottom: '40px',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif",
            paddingBottom: '10px',
            borderBottom: '2px solid #f0f0f0',
            display: 'inline-block',
          }}>Latest Insights</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {[
              {
                id: 3,
                title: 'Advancing mental health aware',
                date: 'June 2025',
                excerpt: 'Major strides in mental health advocacy, partnerships, and youth empowerment through our coaching network',
                image: '/images/home-1.jpeg',
                link: '',
              },
              {
                id: 1,
                title: 'Fellowship Milestones & Coaching Partnerships',
                date: 'May 2025',
                excerpt: 'Strategic coaching partnerships and fellowship achievements with new mental health initiatives',
                image: '/images/home-1.jpeg',
                link: '',
              },
              {
                id: 2,
                title: 'Empowerment coaching for women globally',
                date: 'April 2025',
                excerpt: 'Celebrating women who transform communities through mental resilience coaching',
                image: '/images/home-1.jpeg',
                link: '',
              },
            //   {
            //     id: 3,
            //     title: 'Building community resilience through coaching',
            //     date: 'March 2025',
            //     excerpt: 'New coaching frameworks for community mental health and personal development',
            //     image: '/images/Newsletter-2.jpg',
            //     link: 'https://mailchi.mp/628e9743c58d/nivishe-march-newsletter-157',
            //   },
            ].map(newsletter => (
              <div
                key={newsletter.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f5f5f5',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#f5f5f5';
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div style={{ padding: '25px' }}>
                  <div style={{
                    color: '#666',
                    fontSize: '14px',
                    marginBottom: '12px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {newsletter.date}
                  </div>
                  <h4 style={{
                    fontSize: '19px',
                    fontWeight: '700',
                    marginBottom: '15px',
                    color: '#BC832B',
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: '1.4',
                  }}>
                    {newsletter.title}
                  </h4>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: '#555',
                    marginBottom: '20px',
                  }}>
                    {newsletter.excerpt}
                  </p>
                  <a
                    href={newsletter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#000',
                      textDecoration: 'none',
                      fontFamily: "'Montserrat', sans-serif",
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#333';
                      e.target.style.textDecoration = 'underline';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#000';
                      e.target.style.textDecoration = 'none';
                    }}
                  >
                    Read Insight
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;