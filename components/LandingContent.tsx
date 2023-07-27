import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonals = [
  {
    name: 'Michael Lee',
    initial: 'M.L.',
    title: 'Small Business Owner',
    description:
      "I run a small business, and this AI app has been a revelation. It handles customer inquiries with chatbots, streamlines inventory management, and optimizes pricing for maximum profits. It's like having a virtual assistant 24/7. It has boosted my efficiency and bottom line significantly!",
  },
  {
    name: 'Sophia Martinez',
    initial: 'S.M.',
    title: 'Data Scientist',
    description:
      'The AI app has transformed the way we conduct data analysis. Its machine learning algorithms provide accurate predictions and uncover hidden patterns, leading to valuable insights for our research. An indispensable tool for data scientists!',
  },
  {
    name: 'Alex Wong',
    initial: 'A.W.',
    title: 'Software Engineer',
    description:
      "As a developer, I'm impressed by the AI app's versatility and ease of integration. Its natural language processing capabilities have simplified complex tasks, saving us significant development time. It's a must-have tool for any tech-driven company!",
  },
  {
    name: 'Emily Johnson',
    initial: 'E.J.',
    title: 'Chief Marketing Officer',
    description:
      'Using this AI app has been a game-changer for our marketing team. It provides insightful data analysis and automates repetitive tasks, allowing us to focus on strategic decision-making. Highly recommended!',
  },
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-10 ">
      <h2 className="mb-10 text-center text-4xl font-extrabold text-white">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonals.map((item) => (
          <Card
            key={item.description}
            className="border-none bg-slate-800/80 text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="px-0 pt-4">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default LandingContent
