import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl mb-4 text-center md:text-left">MassenaMonnerat</h3>
            <p className="text-gray-400 text-center md:text-left">
              Transformando sonhos em espaços extraordinários
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-center md:text-left">Contato</h4>
            <div className="space-y-2 text-center md:text-left">
              <a
                href="tel:+5521999649128"
                className="flex justify-center md:justify-start items-center text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                +55 (21) 999649128/99732789
              </a>
              <a
                href="mailto:contato@massenamonnerat.com.br"
                className="flex justify-center md:justify-start items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                contato@massenamonnerat.com.br
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-center md:text-left">Endereço</h4>
            <div className="flex flex-col items-center md:items-start text-gray-400">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <p className="text-center md:text-left">
                  Rua Visconde de Sepetiba, 935 | Sala 922/907<br />
                  Niterói, RJ<br />
                  CEP: 24020206
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4 text-center md:text-left">Redes Sociais</h4>
            <div className="space-y-3 text-center md:text-left">
              <a
                href="https://instagram.com/massenamonnerat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start items-center text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @massenamonnerat
              </a>
              <a
                href="https://facebook.com/massenamonnerat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start items-center text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5 mr-2" />
                MassenaMonnerat Arquitetos
              </a>
              <a
                href="https://linkedin.com/company/massenamonnerat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start items-center text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                MassenaMonnerat Arquitetos
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MassenaMonnerat Arquitetos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
