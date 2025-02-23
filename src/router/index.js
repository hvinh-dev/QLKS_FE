import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from "./kiemTraAdmin";

const routes = [
    // loai-phong
    {
        path: '/admin/loai-phong',
        component: () => import('../components/Admin/LoaiPhong/index.vue'),
        beforeEnter: kiemTraAdmin,
    },
    // dich vu
    {
        path: '/admin/dich-vu',
        component: () => import('../components/Admin/DichVu/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // phong
    {
        path: '/admin/quan-ly-phong',
        component: () => import('../components/Admin/Phong/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // chi tiet thue phong
    {
        path: '/admin/chi-tiet-thue-phong',
        component: () => import('../components/Admin/ChiTietThuePhong/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Tinh Trang Phong
    {
        path: '/admin/tinh-trang-phong',
        component: () => import('../components/Admin/TinhTrangPhong/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // nhan-vien
    {
        path: '/admin/nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // slide
    {
        path: '/admin/slide',
        component: () => import('../components/Admin/Slide/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Review
    {
        path: '/admin/review',
        component: () => import('../components/Admin/Review/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Phân Quyền
    {
        path: '/admin/phan-quyen',
        component: () => import('../components/Admin/PhanQuyen/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    // Admin dang nhap
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: {layout: 'auth'}
    },

    {
        path: '/admin/khach-hang',
        component: () => import('../components/Admin/KhachHang/index.vue'),
        beforeEnter: kiemTraAdmin
    },

    // HomePage
    {
        path: '/',
        component: () => import('../components/Client/HomePage/index.vue'),
        meta: {layout: 'client'}
    },
    // Chi tiet phong
    {
        path: '/chi-tiet-phong',
        component: () => import('../components/Client/ChiTietPhong/index.vue'),
        meta: {layout: 'client'}
    },
    // Loai phong
    {
        path: '/dat-phong',
        component: () => import('../components/Client/LoaiPhong/index.vue'),
        meta: {layout: 'client'},
        name: "datPhong",
        props: true
    },
    {
        path: '/admin/bai-viet',
        component: () => import('../components/Admin/BaiViet/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    {
        path: '/admin/chuyen-muc',
        component: () => import('../components/Admin/ChuyenMuc/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    {
        path: '/admin/danh-sach-hoa-don',
        component: () => import('../components/Admin/HoaDon/index.vue'),
        beforeEnter: kiemTraAdmin
    },
    {
        path: '/admin/thong-ke-1',
        component: () => import('../components/Admin/ThongKe/thong_ke_1.vue'),
        beforeEnter: kiemTraAdmin
    },
    {
        path: '/admin/thong-ke-2',
        component: () => import('../components/Admin/ThongKe/thong_ke_2.vue'),
        beforeEnter: kiemTraAdmin
    },
    {
        path: '/admin/thong-ke-3',
        component: () => import('../components/Admin/ThongKe/thong_ke_3.vue'),
        beforeEnter: kiemTraAdmin
    },
    {
        path: '/admin/thong-ke-4',
        component: () => import('../components/Admin/ThongKe/thong_ke_4.vue'),
        beforeEnter: kiemTraAdmin
    },
    {
        path: '/tim-loai-phong',
        component: () => import('../components/Client/TimLoaiPhong/index.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/danh-sach-phong',
        component: () => import('../components/Client/DanhSachPhong/index.vue'),
        meta: {layout: 'client'}
    },
    {
        path: '/bai-viet/:slug_chuyen_muc',
        component: () => import('../components/Client/BaiViet/index.vue'),
        meta: {layout: 'client'},
        props: true
    },
    {
        path: '/khach-hang/dang-ky',
        component: () => import('../components/Client/DangKy/index.vue'),
        meta: {layout: 'auth'}
    },
    {
        path: '/khach-hang/dang-nhap',
        component: () => import('../components/Client/DangNhap/index.vue'),
        meta: {layout: 'auth'}
    },
    {
        path: '/quen-mat-khau',
        component: () => import('../components/Client/QuenMatKhau/index.vue'),
        meta: {layout: 'auth'}
    },
    {
        path: '/dat-lai-mat-khau/:ma_bi_mat',
        component: () => import('../components/Client/DatLaiMatKhau/index.vue'),
        meta: {layout: 'auth'}
    },
    {
        path: '/test',
        component: () => import('../components/Admin/Test/index.vue'),
        meta: {layout: 'auth'}
    },
    {
        path: '/kich-hoat/:ma_bi_mat',
        component: () => import('../components/Client/KichHoat/index.vue'),
        meta: {layout: 'auth'}
    },
    {
        path: "/chi-tiet-bai-viet/:id",
        component: () => import("../components/Client/ChiTietBaiViet/index.vue"),
        meta: {layout: 'client'},
        props: true
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
