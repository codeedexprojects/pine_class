import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import image from '../../assets/footerbg.jpg';

export default function Footer() {
  return (
    <footer
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 bg-black/50">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                Pine<span className="text-green-400">class</span>
              </h3>
              <p className="text-sm text-blue-200 mt-1">Learn. Grow. Succeed.</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-green-400" />
                <span>hello@pineclass.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91 91013 23 2309</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>Somewhere in the World</span>
              </div>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Home</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Benefits</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Our Courses</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Meet Our Trainers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Our Locations</a></li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Company</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Achievements</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">Our Goals</a></li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700/50 mt-8 pt-6 text-center">
          <p className="text-blue-300 text-sm">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
