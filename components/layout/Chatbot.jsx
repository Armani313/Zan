"use client";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(true);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Привет! Чем могу помочь?", sender: "bot" },
    ]);

    const messagesEndRef = useRef(null);

    const handleSendMessage = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        const newMessage = { id: Date.now(), text: trimmedInput, sender: "user" };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");

        // Автоответ от бота через 1 секунду
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: "Ваш запрос получен!",
                sender: "bot",
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        // Используем inline-стили для фиксированного позиционирования в правом нижнем углу
        <div
            style={{
                position: "fixed",
                bottom: "200px",
                right: "16px",
                zIndex: 9999,
            }}
        >
            {isOpen && (
                <div className="mb-2 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
                    {/* Заголовок окна чата */}
                    <div className="px-4 py-2 bg-blue-600 text-blue-800 rounded-t-lg flex justify-between items-center">
                        <span>Чат-бот</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-black focus:outline-none text-2xl"
                        >
                            &times;
                        </button>
                    </div>
                    {/* Область сообщений */}
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                            >
                <span
                    className={`inline-block px-3 py-2 rounded-lg ${
                        msg.sender === "user"
                            ? "bg-blue-200 text-black"
                            : "bg-gray-200 text-black"
                    }`}
                >
                  {msg.text}
                </span>
                            </div>
                        ))}
                        <div ref={messagesEndRef}/>
                    </div>
                    {/* Форма ввода */}
                    <div className="px-4 py-2 border-t border-gray-200">
                        <form onSubmit={handleSendMessage} className="flex">
                            <input
                                type="text"
                                placeholder="Введите сообщение..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="w-full border rounded px-2 py-1 text-black focus:outline-none focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="ml-2 bg-blue-600 text-black px-3 py-1 rounded"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {/* Кнопка для открытия/закрытия окна чатбота */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    //background: "blue",
                    color: "white",
                    width: "64px",
                    height: "64px",
                    //border: "2px solid red",
                }}
                className="rounded-full shadow-lg flex items-center justify-center focus:outline-none"
            >
                <img src="/assets/imgs/icons/geekbot-svgrepo-com.svg" alt="Chatbot Icon" className="w-30 h-30"/>
            </button>

        </div>
    );
}
