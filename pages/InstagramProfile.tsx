import React, { useState } from 'react';
import { Page } from '../types';
import { ArrowLeft, MoreHorizontal, Grid, User, Heart, MessageCircle, Send, Bookmark, ChevronDown, X, Zap, Info, ShieldCheck, Lock } from 'lucide-react';
import { ComicButton } from '../components/ComicButton';

interface InstagramProfileProps {
  setPage: (page: Page) => void;
}

interface Comment {
  question: string;
  answer: string;
}

interface Post {
  id: number;
  img: string;
  likes: string;
  caption: string;
  comments: Comment[];
}

export const InstagramProfile: React.FC<InstagramProfileProps> = ({ setPage }) => {
  const [selectedStory, setSelectedStory] = useState<{title: string, content: string, color: string} | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Handler for the main profile picture click
  const handleProfileClick = () => {
    setSelectedStory({
      title: "¡AVISO DE MISIÓN!",
      content: "⚠️ Esta web es un proyecto desarrollado con fines educativos y de demostración de diseño. Toda la información médica está basada en fuentes reales, pero el objetivo principal es que DISFRUTES la experiencia y te motives. ¡Gracias por visitarnos, Héroe!",
      color: "bg-purple-100"
    });
  };

  // Data for Highlights - UPDATED IMAGES to be health-related
  const highlights = [
    { 
      id: 1, 
      title: 'Tips Salud', 
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop&q=80', // Healthy Food / Salad
      content: "🍎 LA REGLA DEL 80/20: Come saludable el 80% del tiempo y disfruta tus caprichos el 20%. ¡El equilibrio evita que tires la toalla!",
      color: "bg-green-100"
    },
    { 
      id: 2, 
      title: 'Eventos', 
      img: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?w=150&h=150&fit=crop&q=80', // UPDATED: Outdoor fitness group
      content: "📅 ¡ALERTA DE RAID! Este sábado a las 10:00 AM en el Parque del Retiro. Clase de Yoga + Picnic saludable. ¡Trae tu esterilla!",
      color: "bg-blue-100"
    },
    { 
      id: 3, 
      title: 'Recetas', 
      img: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=150&h=150&fit=crop&q=80', // Green Smoothie
      content: "🧪 POCIÓN DE MANÁ (Smoothie Verde): Espinacas + Piña + Jengibre + Agua de Coco. ¡Recuperación instantánea de HP!",
      color: "bg-yellow-100"
    },
    { 
      id: 4, 
      title: 'Motivación', 
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=150&h=150&fit=crop&q=80', // Gym / Weights
      content: "🔥 ¿Te duelen los músculos? Eso es la debilidad abandonando tu cuerpo. ¡No pares hasta que suene la campana, Guerrero!",
      color: "bg-red-100"
    },
  ];

  // Active Posts
  const posts: Post[] = [
    { 
      id: 1, 
      img: 'https://daleclick.megarifas.uy/wp-content/uploads/2026/02/image0-1.jpeg',
      likes: "1,240",
      caption: "¡Misión cumplida! 💪 La constancia es tu superpoder más importante. No necesitas ser el más rápido, solo el que nunca se rinde. #FitnessHero #NoPainNoGain",
      comments: [
        { 
          question: "¿Cuánto tiempo debo hacer esto para ver resultados?", 
          answer: "¡Paciencia, recluta! Empieza con 20 min diarios. En 4 semanas sentirás el cambio, en 8 lo verás. 🚀" 
        },
        { 
          question: "¿Sirve este ejercicio para bajar de peso rápido?", 
          answer: "El 'rápido' suele traer efecto rebote. Combina déficit calórico + fuerza para un resultado legendario y duradero." 
        },
        { 
          question: "¿Me va a doler mucho el cuerpo?", 
          answer: "Ese dolor son tus debilidades abandonando tu cuerpo. ¡Es la señal de que estás subiendo de nivel! 🔥" 
        }
      ]
    },
    { 
      id: 2, 
      img: 'https://daleclick.megarifas.uy/wp-content/uploads/2026/02/image1-1.jpeg',
      likes: "2,853",
      caption: "Nutrición = Combustible 🍎. Tu cuerpo es tu armadura, no la llenes de basura. Aquí preparando los suministros para la semana.",
      comments: [
        { 
          question: "¿Qué debo comer antes de entrenar?", 
          answer: "Carbohidratos complejos (avena, plátano) 1 hora antes. ¡Necesitas energía para la batalla! 🍌" 
        },
        { 
          question: "¿Puedo hacer estas rutinas en casa sin equipo?", 
          answer: "¡Absolutamente! Tu propio peso corporal es el mejor gimnasio. La calistenia es el camino del guerrero." 
        },
        { 
          question: "Tengo 50 años, ¿es seguro para mí?", 
          answer: "¡Sí! El movimiento es vida a cualquier edad. Adapta la intensidad y consulta a tu médico si tienes dudas. 🛡️" 
        }
      ]
    },
    { 
      id: 3, 
      img: 'https://daleclick.megarifas.uy/wp-content/uploads/2026/02/image2-1.jpeg',
      likes: "992",
      caption: "Modo Zen activado 🧘‍♀️. La flexibilidad y el descanso son tan importantes como la fuerza. ¡Recarga tu barra de maná!",
      comments: [
        { 
          question: "¿Hago cardio o pesas primero?", 
          answer: "Recomiendo pesas primero para gastar el glucógeno muscular, y luego cardio para quemar reservas. 🏋️‍♀️➡️🏃‍♀️" 
        },
        { 
          question: "¿Cuánta agua debo beber al día?", 
          answer: "¡Mantén tu hidratación al máximo! Mínimo 2 litros. Si tu orina es oscura, ¡necesitas poción de agua ya! 💧" 
        },
        { 
          question: "¿Qué hago si me estanco y no progreso?", 
          answer: "¡Shock muscular! Cambia la rutina, aumenta el peso o reduce el descanso. El cuerpo se adapta, ¡sorpréndelo!" 
        }
      ]
    },
  ];

  // Blurred Future Posts
  const futurePosts = [
    { id: 4, img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&fit=crop&q=80' }, // Trainer
    { id: 5, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&fit=crop&q=80' }, // Salad Bowl
    { id: 6, img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&fit=crop&q=80' }, // Yoga Pose
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-4 pb-12">
      {/* Mobile Frame Simulator */}
      <div className="bg-white w-full max-w-md min-h-[800px] border border-gray-300 shadow-2xl relative overflow-hidden">
        
        {/* Navigation / Header */}
        <header className="sticky top-0 bg-white z-10 border-b border-gray-200 px-4 py-3 flex justify-between items-center">
          <button onClick={() => setPage(Page.HOME)} className="text-black">
            <ArrowLeft size={24} />
          </button>
          <h1 className="font-bold text-lg">dra_julieth_uribe</h1>
          <MoreHorizontal size={24} />
        </header>

        {/* Profile Info Section */}
        <section className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            {/* Avatar with Story Ring - CLICKABLE */}
            <button 
                onClick={handleProfileClick}
                className="relative group focus:outline-none"
            >
               <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 group-active:scale-95 transition-transform cursor-pointer">
                  <div className="w-full h-full rounded-full bg-white p-[2px]">
                    <img 
                        src="https://daleclick.megarifas.uy/wp-content/uploads/2026/02/imgi_2_621737526_18082553051518091_9195886376786298017_n-1.jpg" 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover"
                    />
                  </div>
               </div>
               {/* Tiny indicator that it's clickable */}
               <div className="absolute bottom-0 right-0 bg-comic-blue text-white rounded-full p-1 border-2 border-white shadow-sm">
                   <Info size={12} />
               </div>
            </button>

            {/* Stats */}
            <div className="flex flex-1 justify-around text-center ml-4">
              <div>
                <span className="block font-bold text-lg">1,240</span>
                <span className="text-xs text-gray-500">Publicaciones</span>
              </div>
              <div>
                <span className="block font-bold text-lg">15.4k</span>
                <span className="text-xs text-gray-500">Seguidores</span>
              </div>
              <div>
                <span className="block font-bold text-lg">890</span>
                <span className="text-xs text-gray-500">Seguidos</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-4">
            <h2 className="font-bold">Dra. Julieth Uribe</h2>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              🩺 Medicina Deportiva | Salud & Movimiento <br/>
              🎌 Otaku del Fitness - Nivel 99 <br/>
              📍 Madrid, ES <br/>
              ⬇️ Únete al reto JulietApp
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 text-sm font-semibold">
            <button className="flex-1 bg-gray-100 text-black py-1.5 rounded-lg flex items-center justify-center gap-1">
                Siguiendo <ChevronDown size={16} />
            </button>
            <button className="flex-1 bg-gray-100 text-black py-1.5 rounded-lg">Mensaje</button>
            <button className="bg-gray-100 px-2 rounded-lg"><User size={16}/></button>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-4 mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">
            {highlights.map((story) => (
              <button 
                key={story.id} 
                onClick={() => setSelectedStory(story)}
                className="flex flex-col items-center gap-1 min-w-[70px] group"
              >
                <div className="w-16 h-16 rounded-full border border-gray-200 p-[2px] group-active:scale-95 transition-transform">
                    <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden border-2 border-transparent group-hover:border-comic-red">
                        <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
                    </div>
                </div>
                <span className="text-xs truncate w-full text-center">{story.title}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="border-t border-gray-200 flex">
          <button className="flex-1 py-3 flex justify-center border-b border-black">
            <Grid size={24} />
          </button>
          <button className="flex-1 py-3 flex justify-center text-gray-400">
            <User size={24} />
          </button>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-0.5 pb-20">
          {/* Active Posts */}
          {posts.map((post) => (
            <button 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="aspect-square relative group bg-gray-100 overflow-hidden focus:outline-none"
            >
              <img src={post.img} alt="Post" className="w-full h-full object-cover" />
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/30 hidden group-hover:flex items-center justify-center text-white font-bold gap-4">
                  <span className="flex items-center gap-1"><Heart fill="white" size={16}/> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle fill="white" size={16}/> {post.comments.length * 2}</span>
              </div>
            </button>
          ))}
          
          {/* Blurred / Future Posts */}
          {futurePosts.map((post) => (
             <div key={post.id} className="aspect-square relative overflow-hidden bg-gray-100 cursor-not-allowed">
                <img 
                    src={post.img} 
                    alt="Locked Post" 
                    className="w-full h-full object-cover filter blur-[3px] opacity-60 grayscale hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-black/20 p-2 rounded-full backdrop-blur-sm border border-white/50">
                        <Lock size={16} className="text-white"/>
                    </div>
                </div>
             </div>
          ))}
        </div>

        {/* Return to App Button Overlay */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
             <ComicButton onClick={() => setPage(Page.HOME)} className="text-sm py-1 shadow-lg">
                <ArrowLeft size={16} className="inline mr-1"/> VOLVER A JULIETAPP
             </ComicButton>
        </div>

        {/* --- STORY POPUP MODAL --- */}
        {selectedStory && (
          <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200">
             <div className={`w-full relative border-4 border-black p-6 shadow-[8px_8px_0_0_#fff] transform rotate-1 ${selectedStory.color}`}>
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="absolute -top-4 -right-4 bg-comic-red text-white border-2 border-black p-2 hover:scale-110 transition-transform shadow-md z-10"
                >
                  <X size={24} />
                </button>
                <div className="flex items-center gap-3 mb-6 border-b-4 border-black pb-4 border-dashed">
                   <div className="bg-white border-2 border-black p-2 rounded-full">
                      <Zap className="text-black" size={24} fill="gold"/>
                   </div>
                   <h3 className="font-comic text-3xl uppercase tracking-wide">{selectedStory.title}</h3>
                </div>
                <div className="bg-white border-2 border-black p-4 font-body font-bold text-lg leading-relaxed shadow-inner">
                   {selectedStory.content}
                </div>
                <div className="mt-6 flex justify-center">
                   <button 
                     onClick={() => setSelectedStory(null)}
                     className="font-comic bg-black text-white px-6 py-2 border-2 border-transparent hover:bg-comic-yellow hover:text-black hover:border-black transition-colors skew-x-[-10deg]"
                   >
                     <span className="block skew-x-[10deg]">¡ENTENDIDO!</span>
                   </button>
                </div>
             </div>
          </div>
        )}

        {/* --- POST DETAIL MODAL --- */}
        {selectedPost && (
          <div className="absolute inset-0 z-50 bg-white flex flex-col animate-in slide-in-from-bottom duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 sticky top-0 bg-white z-10">
               <div className="flex items-center gap-3">
                 <button onClick={() => setSelectedPost(null)}><ArrowLeft size={24}/></button>
                 <span className="font-bold text-sm">Publicaciones</span>
               </div>
               <div className="font-comic text-comic-blue text-xs uppercase border border-black px-2 bg-yellow-200 transform -rotate-2">
                 Modo Lectura
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-20 bg-white">
               {/* Post Header */}
               <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-500 p-[1.5px]">
                      <img src="https://daleclick.megarifas.uy/wp-content/uploads/2026/02/imgi_2_621737526_18082553051518091_9195886376786298017_n-1.jpg" className="w-full h-full rounded-full object-cover border border-white"/>
                    </div>
                    <span className="font-bold text-sm">dra_julieth_uribe</span>
                  </div>
                  <MoreHorizontal size={20}/>
               </div>

               {/* Post Image */}
               <div className="w-full bg-gray-100 border-y-2 border-black">
                 <img src={selectedPost.img} alt="Post Detail" className="w-full object-cover" />
               </div>

               {/* Action Bar */}
               <div className="p-3">
                 <div className="flex justify-between mb-2">
                   <div className="flex gap-4">
                     <Heart size={24} className="hover:text-red-500 cursor-pointer"/>
                     <MessageCircle size={24} className="hover:text-blue-500 cursor-pointer"/>
                     <Send size={24} className="hover:text-green-500 cursor-pointer"/>
                   </div>
                   <Bookmark size={24}/>
                 </div>
                 <div className="font-bold text-sm mb-2">{selectedPost.likes} Me gusta</div>
                 
                 {/* Caption */}
                 <div className="text-sm mb-4">
                   <span className="font-bold mr-2">dra_julieth_uribe</span>
                   {selectedPost.caption}
                 </div>

                 {/* Q&A Comments Section */}
                 <div className="space-y-4 mt-6 border-t border-gray-200 pt-4">
                   <h4 className="font-comic text-gray-500 text-xs uppercase mb-2">Comentarios Destacados</h4>
                   
                   {selectedPost.comments.map((comment, idx) => (
                     <div key={idx} className="space-y-2">
                       {/* User Question */}
                       <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <User size={16} className="text-gray-500"/>
                          </div>
                          <div className="bg-gray-100 rounded-r-xl rounded-bl-xl p-3 text-sm flex-1">
                            <span className="font-bold block text-xs text-gray-600 mb-1">Usuario Anónimo</span>
                            {comment.question}
                          </div>
                       </div>

                       {/* Doctor Reply */}
                       <div className="flex gap-3 pl-8">
                          <div className="flex-1 bg-comic-blue/10 border-l-4 border-comic-blue rounded-r-xl p-3 text-sm">
                             <div className="flex items-center gap-1 mb-1 text-comic-blue">
                                <ShieldCheck size={14} />
                                <span className="font-bold text-xs">Dra. Julieth Uribe</span>
                             </div>
                             <span className="text-gray-800 font-medium">{comment.answer}</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-yellow-400 border border-black p-0.5 flex-shrink-0">
                             <img src="https://daleclick.megarifas.uy/wp-content/uploads/2026/02/imgi_2_621737526_18082553051518091_9195886376786298017_n-1.jpg" className="w-full h-full rounded-full object-cover"/>
                          </div>
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 <div className="text-xs text-gray-400 mt-4 uppercase">HACE 2 DÍAS</div>
               </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};