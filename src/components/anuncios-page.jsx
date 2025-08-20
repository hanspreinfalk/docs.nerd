export function AnunciosPage() {
  return (
    <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
      <div className="text-center space-y-3 px-4 lg:px-6">
        <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
          Anuncios
        </h1>
        <p className="text-base text-black dark:text-white lg:text-lg text-left max-w-3xl">
          Mantente al día con las últimas noticias y actualizaciones de Nerd.lat
        </p>
      </div>

      <div className="w-full max-w-4xl mt-8 px-4 lg:px-6">
        <article className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Imagen del anuncio */}
          <div className="w-full">
            <img 
              src="/marketing/supabase.jpg" 
              alt="Nerd.lat conecta con Supabase" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Contenido del anuncio */}
          <div className="p-6 md:p-8">
            {/* Fecha de publicación */}
            <div className="mb-4">
              <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium px-3 py-1 rounded-full">
                20 de agosto, 2025
              </span>
            </div>
            
            {/* Título del anuncio */}
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
              Nerd.lat ya permite conectar bases de datos a Supabase
            </h2>
            
            {/* Contenido principal */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Estamos emocionados de anunciar que Nerd.lat ahora permite conectar directamente con bases de datos de Supabase, llevando el desarrollo de aplicaciones full-stack a un nuevo nivel de simplicidad y potencia.
              </p>
              
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                ¿Qué significa esto para ti?
              </h3>
              
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>Desarrollo más rápido:</strong> Conecta tu aplicación a una base de datos PostgreSQL completa en minutos, no horas.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>Autenticación integrada:</strong> Sistema de usuarios y autenticación listo para usar sin configuración adicional.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>Almacenamiento de archivos:</strong> Sube y gestiona archivos directamente desde tu aplicación.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span><strong>Actualizaciones en tiempo real:</strong> Sincronización automática de datos entre usuarios.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                Cómo empezar
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Integrar Supabase con tu proyecto de Nerd.lat es increíblemente sencillo:
              </p>
              
              <ol className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span>Crea una cuenta gratuita en Supabase</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span>Obtén tu URL del proyecto y clave API</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span>Proporciona las credenciales a Nerd.lat</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span>¡Listo! Tu aplicación ya tiene una base de datos completa</span>
                </li>
              </ol>
              
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Perfecto para principiantes
                </h4>
                <p className="text-sm text-green-800 dark:text-green-200">
                  No necesitas conocimientos técnicos previos. Nerd.lat se encarga automáticamente de toda la configuración y conexión, permitiéndote enfocarte en construir tu aplicación.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                Casos de uso populares
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Con esta nueva integración, puedes crear fácilmente:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-black dark:text-white">Aplicaciones sociales</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Perfiles de usuario, posts, comentarios</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-black dark:text-white">E-commerce</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Catálogos de productos, carritos, órdenes</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-black dark:text-white">Herramientas de productividad</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Listas de tareas, notas, calendarios</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-black dark:text-white">Aplicaciones colaborativas</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Equipos, proyectos, documentos compartidos</p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-black dark:text-white mb-3">
                  ¿Listo para empezar?
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Esta nueva funcionalidad ya está disponible para todos los usuarios de Nerd.lat. Visita nuestra página de integraciones para obtener una guía paso a paso sobre cómo configurar tu conexión con Supabase.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Próximamente:</strong> Estamos trabajando en más integraciones emocionantes que harán que desarrollar con Nerd.lat sea aún más poderoso y sencillo.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
      
      {/* Sección de próximos anuncios */}
      <div className="w-full max-w-4xl mt-8 px-4 lg:px-6">
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Mantente al día
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            Este es nuestro anuncio más reciente. Regresa pronto para más noticias emocionantes.
          </p>
        </div>
      </div>
    </div>
  )
}