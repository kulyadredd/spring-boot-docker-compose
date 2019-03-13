package com.app.kulyadredd.repository;

import com.app.kulyadredd.entity.Role;
import com.app.kulyadredd.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    public Optional<Role> findByName(RoleName roleName);

}
