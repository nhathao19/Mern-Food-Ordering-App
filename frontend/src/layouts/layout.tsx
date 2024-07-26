import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
    children: React.ReactNode
}


function layout({ children }: Props) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Hero />
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer />
        </div>
    )
}


export default layout
