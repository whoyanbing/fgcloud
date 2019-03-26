<?php
class Video extends CI_Controller
{
  public function top10(){
    $this->load->model('video_model');
    $result = $this->video_model->top10();
    $this->json([
      'code' => 0,
      'data' => $result
    ]);
  }
  public function detail(){
    $id = $this->input->post('id');
    $this->load->model('video_model');
    $result = $this->video_model->detail($id);
    $this->json([
      'code' => 0,
      'data' => $result
    ]);
  }
  public function imgs(){
    $this->load->model('video_model');
    $result = $this->video_model->imgs();
    $this->json([
      'code' => 0,
      'data' => $result
    ]);
  }
}