import { Mail, Phone } from 'lucide-react'

function Footer(){
    return(
        <footer className=' bg-zinc-900 '>
            <div id="address" className='flex flex-col gap-4'>
                <p>CMI-Engenharia Montagem Industiral</p>
                <p>Rua Emilia Serra Otranto - N°30 - CHACARAS SAO MARTINHO - Campinas-SP - CEP: 13042-834</p>
            </div>
            <div id="contact" className='flex gap-4'>
                <Mail/>
                <Phone />
            </div>
        </footer>
    )
}

export default Footer