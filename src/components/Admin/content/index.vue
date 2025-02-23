<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="mt-2">Thêm Content</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-2">
                            <label for="">Tên content</label>
                            <input type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2 mt-2">
                            <label for="">Slug Content</label>
                            <input type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2 mt-2">
                            <label for="">Tình Trạng</label>
                            <input type="text" class="form-control mt-2">
                        </div>
                        <div class="mb-2 mt-2">
                            <label for="">Nội Dung</label>
                            <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                        </div>
                        <div class="mb-2 mt-2">
                            <label for="">Ảnh</label>
                            <input type="file" class="form-control" id="inputGroupFile03"
                                aria-describedby="inputGroupFileAddon03" aria-label="Upload">
                        </div>

                    </div>
                    <div class="card-footer text-end">
                        <button class="btn btn-primary">Thêm Mới</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Danh Sách Content</h5>
                        <hr />
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Content Số 1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="text-nowrap align-middle"> Tên content</th>
                                                    <td>Xu Hướng Thiết Kế Khách Sạn Mới Nhất</td>

                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Slug content</th>
                                                    <td>xu-huong-thiet-ke-khach-san-moi-nhat</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Nội Dung</th>
                                                    <td>Khám phá những xu hướng thiết kế khách sạn hàng đầu hiện nay, từ
                                                        phong cách tối giản đến các tiện nghi công nghệ cao. Bài viết
                                                        này cung cấp cái nhìn sâu sắc về cách các khách sạn đổi mới để
                                                        thu hút khách hàng.</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Ảnh</th>
                                                    <td class="text-center">
                                                        <img src="https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg"
                                                            class="img-fluid" alt="..."
                                                            style="width: 300px; height: 200px;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="100" class="text-center align-middle" rowspan="100">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button class="btn btn-success text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#updateModal"><i
                                                                        class="fa-solid fa-pen-to-square"></i></button>
                                                                
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-danger text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal"><i
                                                                        class="fa-solid fa-trash"></i></button> 
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button btn-primary collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        Content Số 2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="text-nowrap align-middle"> Tên content</th>
                                                    <td>Đánh Giá 5 Khách Sạn Hàng Đầu Thế Giới</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Slug content</th>
                                                    <td>danh-gia-5-khach-san-hang-dau-the-gioi</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Nội Dung</th>
                                                    <td>Hãy cùng điểm qua 5 khách sạn được đánh giá cao nhất trên thế
                                                        giới. Bài viết này sẽ đưa bạn khám phá dịch vụ, tiện ích và trải
                                                        nghiệm độc đáo mà những khách sạn này cung cấp."
                                                        Tên Content: "Lời Khuyên Khi Lựa Chọn Khách Sạn</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Ảnh</th>
                                                    <td class="text-center">
                                                        <img src="https://pistachiohotel.com/UploadFile/Gallery/Overview/a2.jpg"
                                                            class="img-fluid" alt="..."
                                                            style="width: 300px; height: 200px;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="100" class="text-center align-middle" rowspan="100">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button class="btn btn-success text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#updateModal"><i
                                                                        class="fa-solid fa-pen-to-square"></i></button>
                                                                
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-danger text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal"><i
                                                                        class="fa-solid fa-trash"></i></button> 
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button btn-primary collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        Content Số 3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="text-nowrap align-middle"> Tên content</th>
                                                    <td>Lời Khuyên Khi Lựa Chọn Khách Sạn</td>
                                                   
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Slug content</th>
                                                    <td>loi-khuyen-khi-lua-chon-khach-san</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Nội Dung</th>
                                                    <td>Tìm hiểu những lời khuyên hữu ích để chọn được khách sạn phù hợp
                                                        nhất cho chuyến đi của bạn. Bài viết này bao gồm các yếu tố cần
                                                        xem xét như vị trí, giá cả và các đánh giá từ khách hàng trước.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Ảnh</th>
                                                    <td class="text-center">
                                                        <img src="https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg"
                                                            class="img-fluid" alt="..."
                                                            style="width: 300px; height: 200px;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="100" class="text-center align-middle" rowspan="100">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button class="btn btn-success text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#updateModal"><i
                                                                        class="fa-solid fa-pen-to-square"></i></button>
                                                                
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-danger text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal"><i
                                                                        class="fa-solid fa-trash"></i></button> 
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button btn-primary collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        Content Số 4
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="text-nowrap align-middle"> Tên content</th>
                                                    <td>Bí Mật Đằng Sau Quản Lý Khách Sạn Hiệu Quả</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Slug content</th>
                                                    <td>bi-mat-dang-sau-quan-ly-khach-san-hieu-qua</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Nội Dung</th>
                                                    <td>Khám phá các chiến lược và kỹ thuật quản lý khách sạn giúp tạo
                                                        ra sự khác biệt trong ngành công nghiệp khách sạn. Bài viết này
                                                        sẽ cung cấp cái nhìn thực tế về việc quản lý một doanh nghiệp
                                                        lưu trú thành công</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Ảnh</th>
                                                    <td class="text-center">
                                                        <img src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                                                            class="img-fluid" alt="..."
                                                            style="width: 300px; height: 200px;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="100" class="text-center align-middle" rowspan="100">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button class="btn btn-success text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#updateModal"><i
                                                                        class="fa-solid fa-pen-to-square"></i></button>
                                                                
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-danger text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal"><i
                                                                        class="fa-solid fa-trash"></i></button> 
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button btn-primary collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                        Content Số 5
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th class="text-nowrap align-middle"> Tên content</th>
                                                    <td>Cách Khách Sạn Đối Phó Với Đại Dịch COVID-19</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Slug content</th>
                                                    <td>cach-khach-san-doi-pho-voi-dai-dich-covid-19</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Nội Dung</th>
                                                    <td>Phân tích các phương pháp và biện pháp mà các khách sạn trên
                                                        toàn thế giới đã áp dụng để đảm bảo an toàn cho khách hàng trong
                                                        mùa dịch COVID-19. Bài viết này sẽ cho bạn thấy cách ngành khách
                                                        sạn thích ứng với thách thức lớn.</td>
                                                </tr>
                                                <tr>
                                                    <th class="text-nowrap align-middle">Ảnh</th>
                                                    <td class="text-center">
                                                        <img src="https://www.hoteljob.vn/files/quang-ba-khach-san.jpg"
                                                            class="img-fluid" alt="..."
                                                            style="width: 300px; height: 200px;">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="100" class="text-center align-middle" rowspan="100">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button class="btn btn-success text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#updateModal"><i
                                                                        class="fa-solid fa-pen-to-square"></i></button>
                                                                
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-danger text-nowrap w-100"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#deleteModal"><i
                                                                        class="fa-solid fa-trash"></i></button> 
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Sửa
                                    Content</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-2">
                                    <label for="">Tên content</label>
                                    <input type="text" class="form-control mt-2">
                                </div>
                                <div class="mb-2 mt-2">
                                    <label for="">Slug Content</label>
                                    <input type="text" class="form-control mt-2">
                                </div>
                                <div class="mb-2 mt-2">
                                    <label for="">Tình Trạng</label>
                                    <input type="text" class="form-control mt-2">
                                </div>
                                <div class="mb-2 mt-2">
                                    <label for="">Nội Dung</label>
                                    <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                                </div>
                                <div class="mb-2 mt-2">
                                    <label for="">Ảnh</label>
                                    <input type="file" class="form-control" id="inputGroupFile03"
                                        aria-describedby="inputGroupFileAddon03" aria-label="Upload">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                                <button type="button" class="btn btn-primary " data-bs-dismiss="modal">Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Sửa
                                    Content</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show">
                                    <div class="text-dark">Bạn có chắc chắn xoá <b>XXXX</b>
                                        này không!</div><br>
                                    <b class="text-danger">Lưu ý: </b><br>
                                    Nếu xoá bài viết này sẽ mất vĩnh viễn nễu bạn xoá nó

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                                <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Xoá</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>