import Header from '../components/Header'
import Timeline from '../components/Timeline'
import Content from '../components/Content'

export default function Home() {
  return (
    <main className="container mx-auto relative">
      <div
        className={`max-w-3x ${true
          ? 'opacity-100 relative'
          : 'opacity-0 absolute top-0 left-0 right-0 -z-10'
          }`}
      >
        <Header />
        {/* <Timeline /> */}
        <Content />
      </div>
    </main>
  )
}
