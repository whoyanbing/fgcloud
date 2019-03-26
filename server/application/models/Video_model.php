<?php
class Video_model extends CI_Model
{
  public function top10()
  {
    $this->load->database('default');
    $this->db->from('mac_vod');
    $this->db->select('*');
    $this->db->order_by('vod_hits');
    $this->db->limit(10);
    $query = $this->db->get();
    return $query->result();
  }
  public function detail($id)
  {
    $this->load->database('default');
    $this->db->from('mac_vod');
    $this->db->select('*');
    $this->db->where('vod_id',$id);
    $query = $this->db->get();
    return $query->result();
  }
  public function imgs()
  {
    $this->load->database('default');
    $this->db->from('mac_vod');
    $this->db->select(array('vod_id','vod_name','vod_pic'));
    $this->db->order_by('vod_hits_day');
    $this->db->limit(3);
    $query = $this->db->get();
    return $query->result();
  }
}