const useQueryParams = () => {    
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const zip = params.get("zip") || "";
    const orderNo = params.get("order") || "";

    return { zip, orderNo };
};

export default useQueryParams;
