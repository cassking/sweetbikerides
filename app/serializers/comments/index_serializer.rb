class Comments::IndexSerializer < CommentSerializer
  attributes :id,
              :body,
              :username,
              :route_review_id
    def username
      object.user.username
    end

end
