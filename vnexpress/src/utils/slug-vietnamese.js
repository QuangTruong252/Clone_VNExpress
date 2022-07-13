const vietnamfy = (slug) => {
    let result = "";
    switch (slug) {
        case "thoi-su":
            result = "Thời sự";
            break;
        case "kinh-doanh":
            result = "Kinh doanh";
            break;
        case "giai-tri":
            result = "Giải trí";
            break;
        case "the-thao":
            result = "Thể thao";
            break;
        case "phap-luat":
            result = "Pháp luật";
            break;
        case "suc-khoe":
            result = "Sức khỏe";
            break;
        case "du-lich":
            result = "Du lịch";
            break;
        case "doi-song":
            result = "Đời sống";
            break;
        case "xe":
            result = "Xe";
            break;
        case "y-kien":
            result = "Ý kiến";
            break;
        case "tam-su":
            result = "Tâm sự";
            break;
        case "khoa-hoc":
            result = "Khoa học";
            break;
        case "video":
            result = "Video";
            break;
        case "hai":
            result = "Hài";
            break;
        default:
            result = slug;
            break;
    }
    return result
};

export default vietnamfy;