let handler = async (m, { socket, command }) => {
    const defaultMenu = `Klik nih ngab`;
    socket.sendMessage(m.chat, {
        location: {
            degreesLatitude: -6.2088, // Ganti dengan latitude lokasi
            degreesLongitude: 106.8456 // Ganti dengan longitude lokasi
        },
        caption: defaultMenu,
        footer: foother,
        buttons: [
                {
                buttonId: `huu`,
                buttonText: {
                    displayText: '\nSaya pedo:v'
                },
                type: 1
            }
        ],
        headerType: 6,
        viewOnce: true
    }, { quoted: m });
};

handler.command = ["loli"]
export default handler 