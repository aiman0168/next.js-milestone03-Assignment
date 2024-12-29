import { notFound } from 'next/navigation';
import CommentSection from '@/app/Components/CommentsSection';

const PostPage = async ({ params }: { params: { id: string } }) => {
  const posts = [
    { id: '1', title: 'The Impact of Social Media on Mental Health', content: 'Social media has become an integral part of daily life providing endless opportunities for connection, entertainment, and information. However, its influence on mental health is a topic of growing concern. While platforms like Instagram and Facebook offer a space for self-expression and community building, they can also contribute to feelings of loneliness, anxiety, and low self-esteem. The pressure to maintain a curated, idealized version of ones life can negatively affect self-worth, especially among younger audiences. As more people become aware of these challenges, it is crucial to find a balance that allows social media to enhance, rather than hinder, mental well-being.'},
    { id: '2', title: 'The Future of Electric Vehicles', content: 'The future of electric vehicles (EVs) is an exciting and transformative topic within the automotive industry. As climate change concerns escalate, the shift from traditional gasoline-powered cars to electric options is accelerating. EVs offer a more sustainable alternative with zero emissions, lower operating costs, and a quieter, smoother driving experience. Technological advancements are continuously improving battery life, reducing charging times, and expanding charging infrastructure, making electric vehicles increasingly practical for everyday use. With major automakers committing to produce only electric vehicles in the coming decades, EVs are expected to play a pivotal role in reducing global carbon emissions and reshaping the way we think about transportation.' },
    { id: '3', title: 'The Rise of Remote Work Post-Pandemic', content: 'The COVID-19 pandemic transformed the way we work, with remote work becoming the norm for millions of people around the globe. This shift has sparked a new era of flexibility, allowing employees to manage their schedules, avoid long commutes, and achieve a better work-life balance. Companies are also reaping the benefits, including reduced overhead costs and access to a broader talent pool. However, remote work also presents challenges, such as maintaining team cohesion, avoiding burnout, and ensuring productivity. As we look toward the future, many businesses are embracing hybrid models that combine the best aspects of in-office and remote work, reflecting a more adaptable and innovative approach to the workplace.' },
    { id: '4', title: 'The Benefits of Meditation for Stress Relief', content: 'Meditation is a powerful practice that has been used for centuries to enhance mental clarity, emotional balance, and overall well-being. In todays fast-paced world, it has gained significant attention for its ability to reduce stress and improve mental health. By focusing on the present moment and cultivating mindfulness, meditation helps individuals break free from the constant cycle of worry and anxiety. Regular practice can lower blood pressure, improve concentration, and foster a sense of inner peace. Whether practiced for just a few minutes a day or as part of a longer routine, meditation offers an accessible and effective way to combat stress and promote emotional resilience in everyday life.' },
  ];

  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 py-16">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-teal-700 mb-6 text-center">
          {post.title}
        </h1>
        <div className="border-t-4 border-teal-500 mb-6"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {post.content}
        </p>

        <CommentSection />
      </div>
    </div>
  );
};

export default PostPage;