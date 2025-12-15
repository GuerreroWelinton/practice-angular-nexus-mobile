# 📚 Nexus Mobile

Aplicación móvil multiplataforma desarrollada con React Native y Expo para el Máster UNIR.

---

## 🚀 ¿Cómo ejecutar el proyecto?

1. **Clona el repositorio o descomprime el ZIP**
2. Instala dependencias:

```bash
npm install
```

3. Inicia el proyecto en modo desarrollo:

```bash
npx expo start
```

4. Escanea el QR con la app Expo Go (Android/iOS) o usa un emulador.

---

## 🗂️ Estructura principal del proyecto

```
├── app/                # Rutas y navegación principal (expo-router)
│   ├── _layout.jsx     # Layout global y carga de fuentes
│   ├── index.jsx       # Redirección inicial
│   └── ...             # Rutas: landing, tabs, stack, etc.
├── src/
│   ├── api/            # Lógica de consumo de API simulada
│   ├── components/     # Componentes reutilizables (BookCard, AppHeader...)
│   ├── constants/      # Colores, endpoints, categorías
│   ├── context/        # Contexto global (carrito)
│   ├── hooks/          # Custom hooks (useBooks)
│   └── screens/        # Vistas principales (Home, Cart, AboutUs...)
├── assets/             # Imágenes y (opcional) fuentes locales
├── global.css          # Estilos globales
├── tailwind.config.js  # Configuración de Nativewind/Tailwind
├── package.json        # Dependencias y scripts
└── ...
```

---

## ✅ Cumplimiento de la rúbrica UNIR

| Criterio                | Estado | Detalle                                              |
| ----------------------- | ------ | ---------------------------------------------------- |
| Landing                 | ✔️     | Pantalla de bienvenida personalizada                 |
| 5 vistas                | ✔️     | Home, Detalle, Carrito, Categorías, About Us         |
| Navegación (Stack/Tabs) | ✔️     | Implementado con expo-router                         |
| Nativewind + fuentes    | ✔️     | Tailwind/Nativewind y Google Fonts (Poppins, Roboto) |
| Feedback háptico        | ✔️     | En botones y acciones clave                          |
| API simulada            | ✔️     | Consumo de API mock (axios)                          |

- **Componentes nativos**: SafeAreaView, View, Text, Pressable usados en todas las vistas.
- **Estilos**: Nativewind en todo el proyecto, StyleSheet solo para casos especiales.
- **Fuentes**: Google Fonts integradas (si necesitas fuentes locales, agrégalas en assets/fonts).
- **Retroalimentación háptica**: Implementada con expo-haptics.
- **API**: Se usa la API simulada de la actividad 1.
- **Entrega**: Recuerda excluir `node_modules` y adjuntar el video.
