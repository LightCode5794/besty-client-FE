

const fetchProvinces = async () => {
    try {
        // Gọi API để lấy danh sách tỉnh
        const response = await fetch('https://provinces.open-api.vn/api/p/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching provinces:', error);
    }
};

const fetchDistricts = async (provinceId: string) => {
    try {
        // Gọi API để lấy danh sách huyện dựa trên provinceId
        const response = await fetch(`https://provinces.open-api.vn/api/p/${provinceId}?depth=2`);
        const data = await response.json();
        return data; // Chỉ trả về mảng districts
    } catch (error) {
        console.error('Error fetching districts:', error);
    }
};

const fetchWards = async (districtId: string) => {
    try {
        // Gọi API để lấy danh sách xã dựa trên districtId
        const response = await fetch(`https://provinces.open-api.vn/api/d/${districtId}?depth=2`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error fetching wards:', error);
    }
};

export { fetchProvinces, fetchDistricts, fetchWards }

