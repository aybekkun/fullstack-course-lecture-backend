### Лекция: Создание серверного приложения на TypeScript. Начало проекта

---

#### **Цель урока**: 
Создать базовую структуру серверного приложения на TypeScript, настроить окружение, установить зависимости и запустить проект.

---

### **1. Инициализация проекта**
**Шаги**:
1. Создайте папку для проекта:
   ```bash
   mkdir my-server-app && cd my-server-app
   ```
2. Инициализируйте проект с помощью `pnpm`:
   ```bash
   pnpm init
   ```
   - В файле `package.json` укажите:
     ```json
     {
       "name": "my-server-app",
       "version": "0.0.1",
       "private": true,
       "scripts": {},
       "dependencies": {}
     }
     ```
     - `private: true` предотвращает случайную публикацию в npm.

---

### **2. Установка зависимостей**
**Основные пакеты**:
- TypeScript (для работы с TS):
  ```bash
  pnpm add typescript -D
  ```
- TS-Node-Dev (для горячей перезагрузки в разработке):
  ```bash
  pnpm add ts-node-dev -D
  ```
- Типы для Node.js (для автодополнения):
  ```bash
  pnpm add @types/node -D
  ```

---

### **3. Настройка TypeScript**
1. Создайте файл конфигурации `tsconfig.json`:
   ```bash
   npx tsc --init
   ```
2. Пример содержимого:
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "CommonJS",
       "outDir": "dist",
       "rootDir": "src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "sourceMap": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules"]
   }
   ```
   - `outDir`: Папка для скомпилированного JS-кода.
   - `rootDir`: Исходные файлы TS.

---

### **4. Структура проекта**
```
my-server-app/
├── src/
│   └── index.ts    # Главный файл приложения
├── dist/           # Скомпилированный JS-код
├── package.json
└── tsconfig.json
```

- Пример кода в `src/index.ts`:
  ```typescript
  console.log("Hello, Server!");
  ```

---

### **5. Скрипты для запуска**
Добавьте в `package.json`:
```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "rm -rf dist && tsc",
  "start": "node dist/index.js"
}
```

- **Команды**:
  - Запуск в режиме разработки:
    ```bash
    pnpm dev
    ```
  - Сборка проекта:
    ```bash
    pnpm build
    ```
  - Запуск в продакшене:
    ```bash
    pnpm start
    ```

---

### **6. Фиксация версии Node.js**
1. Создайте файл `.nvmrc` в корне проекта:
   ```bash
   echo "20.0.0" > .nvmrc
   ```
2. Для переключения версии:
   ```bash
   nvm use
   ```

---

### **7. Решение частых ошибок**
- **Ошибка "Cannot find name 'console'"**: 
  Убедитесь, что установлены типы для Node.js (`@types/node`).
- **Файлы не перезагружаются**: 
  Проверьте работу `ts-node-dev` и флаг `--respawn`.

---

### **Итоги урока**
- Создана базовая структура серверного приложения.
- Настроен TypeScript и горячая перезагрузка.
- Добавлены скрипты для разработки и продакшена.
- Проект готов к дальнейшему расширению (добавлению API, middleware и т.д.).

**Следующий шаг**: Реализация сервера с обработкой HTTP-запросов и настройка роутинга.